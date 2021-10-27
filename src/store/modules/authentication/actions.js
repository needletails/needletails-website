import axios from '../../../config/network-wrapper.js'

export default {
    async verifyEmail (context, emailtoken) {
        return await axios.get('auth/email-verification?token=' + emailtoken)
      },
      async passwordReset (context, payload) {
        return await axios.post('auth/recover', payload)
      },
}
