export default {
  postContent (state, contentData) {
    state.content = contentData
    state.contentID = contentData.contentID
  },
  storeContent (state, content) {
    state.content = content
  },
  storeContents (state, contents) {
    state.contents = contents
  },
  storeContentID (state, contentID) {
    state.contentID = contentID
  }
}
