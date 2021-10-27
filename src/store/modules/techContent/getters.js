export default {
  techContent: (state) => {
    if (state.content === null) {
      return {}
    }
    return state.content
  },
  techContents: (state) => {
    if (state.contents === null) {
      return {}
    }
    return state.contents
  }
}
