import axios from '../../../config/network-wrapper'


export default {

  async fetchEagerArticles (context) {
    const res = await axios.get('web-eager-article')
    const articles = res.data
    context.commit('storeArticles', articles)
    return res
  },

  async fetchEagerArticle (context, id) {
    const res = await axios.get('web-eager-article/' + id)
    const content = res.data
    context.commit('storeArticle', content)
    return res
  },

  async fetchEagerArticleByName (context, payload) {
    const res = await axios.post('web-eager-article-by-name', payload)
    const content = res.data
    context.commit('storeArticle', content)
    return res
  },

  async createArticle (context, payload) {
    const res = await axios.authPost('tech-articles', payload)
    const article = res.data
    context.commit('postArticle', article)
    return res
  },

  async updateArticle (context, payload) {
    const res = await axios.put('update-tech-article/' + payload.techArticleID, payload)
    const content = res.data
    context.commit('storeArticle', content)
    return res
  },

  async deleteArticle (content, id) {
    return await axios.delete('tech-articles/' + id)
  },

  setArticleID (context, selectedArticleID) {
    context.commit('storeArticleID', selectedArticleID)
  }
}
