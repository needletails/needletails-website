export default {
  storeS3Media (state, s3) {
    state.securityDrivenURL = s3[0]
    state.buildProjectURL = s3[1]
    state.whatWeDoURL = s3[2]
    state.solutionsURL = s3[3]
    state.cartisimCEOURL = s3[4]
    state.daRioURL = s3[5]
    state.securityDrivenWebmURL = s3[6]
    state.securityDrivenOggURL = s3[7]
    state.buildProjectWebmURL = s3[8]
    state.buildProjectOggURL = s3[9]
    state.whatWeDoWebmURL = s3[10]
    state.whatWeDoOggURL = s3[11]
    state.solutionsWebmURL = s3[12]
    state.solutionsOggURL = s3[13]
    state.solutionsPosterURL = s3[14]
  },
  storeFooterS3 (state, s3) {
    state.facebook = s3[0]
    state.instagram = s3[1]
    state.twitter = s3[2]
    state.linkedin = s3[3]
    state.whatsApp = s3[4]
    state.whatsAppQRCode = s3[5]
  }
}
