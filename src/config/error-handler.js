import router from '../router/router'

export default {
  handleError (error, errors) {
    if (
      error.response.status >= 400 ||
      (error.response.status <= 511 && error.response.status !== 404)
    ) {
      errors.push(error.response.data.reason)
    } else if (error.response.status === 404) {
      router.push({ named: '404' })
    } else {
      errors.push(
        'Something went wrong, please refresh and try again.'
      )
    }
  }
}
