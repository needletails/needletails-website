import axios from './auth-axios'

export default {
  async get (url, request, responseType) {
    try {
      const response = await axios.instance
        .get(url, {
          params: request
        },
        responseType
        )
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async post (url, request, header) {
    try {
      const response = await axios.instance
        .post(url, request, header)
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async authGet (url, request) {
    try {
      const response = await axios.authInstance
        .get(url, {
          params: request
        })
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async authPost (url, request) {
    try {
      const response = await axios.authInstance
        .post(url, request)
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async put (url, request) {
    try {
      const response = await axios.authInstance
        .put(url, request)
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async patch (url, request) {
    try {
      const response = await axios.authInstance
        .patch(url, request)
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  },
  async delete (url, request) {
    try {
      const response = await axios.authInstance
        .delete(url, {
          body: request
        })
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  }
}
