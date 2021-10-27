import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import S3 from './modules/s3/index.js'
import Authentication from './modules/authentication/index.js'
import TechArticles from './modules/techArticles/index.js'
import TechContent from './modules/techContent/index.js'

var ls = new SecureLS({ isCompression: false })

const store = createStore({
  strict: process.env.NODE_ENV !== 'development',
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key)
      }
    })
  ],
  state: {
    isMenuOpen: false,
    isCourseOpen: false
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen
    },
  },
  actions: {
    setMenuOpenState(context) {
      context.commit('toggleMenu')
    }
  },
  getters: {
    openMenu(state) {
      return state.isMenuOpen
    }
  },
  modules: {
    S3,
    Authentication,
    TechArticles,
    TechContent
  }
})

export default store