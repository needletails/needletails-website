export default {
  postArticle (state, articleData) {
    state.article = articleData
    state.articleID = articleData.articleID
  },
  storeArticleID (state, articleID) {
    state.articleID = articleID
  },
  storeArticle (state, article) {
    state.article = article
  },
  storeArticles (state, articles) {
    state.articles = articles
  }
}
