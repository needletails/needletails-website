export default {
  techArticle: (state) => {
    if (state.article === null) {
      return {}
    }
    return state.article
  },

  techArticleTitle: (state) => {
    if (state.article === null) {
      return {}
    }
    return state.article.title.replace(/ /g, '')
  },

  techArticles: (state) => {
    if (state.articles === null) {
      return {}
    }
    return state.articles
  }
}
