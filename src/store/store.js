import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

var ls = new SecureLS({ isCompression: false });

const store = createStore({
  strict: process.env.NODE_ENV !== 'development',
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
  state: {
    isMenuOpen: false,
    isCourseOpen: false,
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
  actions: {
    setMenuOpenState(context) {
      context.commit('toggleMenu');
    },
  },
  getters: {
    openMenu(state) {
      return state.isMenuOpen;
    },
  },
  modules: {},
});

export default store;
