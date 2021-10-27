import axios from '../../../config/network-wrapper.js'

export default {
  async fetchS3Media (context) {
    const res = await axios.get('home-s3-media', null, 'text')
    const splitted = res.data.split(' ')
    context.commit('storeS3Media', splitted)
    return res
  },
  async fetchFooterS3Media (context) {
    const res = await axios.get('footer-s3-images', null, 'text')
    const splitted = res.data.split(' ')
    context.commit('storeFooterS3', splitted)
    return res
  }
}
