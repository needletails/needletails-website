import axios from '../../../config/network-wrapper'

export default {
  async fetchContents (context) {
    const res = await axios.get('tech-content')
    const content = res.data
    context.commit('storeContents', content)
    return res
  },

  async fetchContent (context, id) {
    const res = await axios.get('tech-content/' + id)
    const content = res.data
    context.commit('storeContent', content)
    return res
  },

  async createContent (context, payload) {
    const res = await axios.authPost('tech-content', payload)
    const content = res.data
    context.commit('postContent', content)
    return res
  },

  async updateContent (context, payload) {
    const res = await axios.put('tech-content/' + payload.techContentID, payload)
    const content = res.data
    context.commit('storeContent', content)
    return res
  },

  async deleteContent (context, id) {
    return await axios.delete('tech-content/' + id)
  }
}
