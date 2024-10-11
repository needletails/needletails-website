import axios from 'axios';
import router from '../router/router';
import store from '../store/store';

const authInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  responseType: String,
});

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
});

authInstance.interceptors.request.use(
  (config) => {
    const token = store.state.Authentication.token;
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    } else {
      router.push({ name: 'login' });
    }
    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (
      error.config.url === 'api/auth/access-token' ||
      error.response.data.reason !== 'exp claim verification failed: expired'
    ) {
      return new Promise((resolve, reject) => {
        store
          .dispatch('Authentication/logout')
          .then((res) => {
            router.push({ name: 'login' });
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }

    return new Promise((resolve, reject) => {
      const config = error.config;
      const token = store.state.Authentication.token;
      const payload = {
        refreshToken: store.state.Authentication.refreshToken,
      };
      store
        .dispatch('Authentication/fetchNewToken', payload)
        .then((res) => {
          config.headers.authorization = `Bearer ${token}`;
          resolve(res);
        })
        .catch((error) => {
          reject(error);
          return new Promise((resolve, reject) => {
            store
              .dispatch('Authentication/logout')
              .then((res) => {
                router.push({ name: 'login' });
                resolve(res);
              })
              .catch((error) => {
                reject(error);
              });
          });
        });
    });
  }
);

export default {
  instance,
  authInstance,
};
