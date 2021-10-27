<template>
  <div class="video-wrapper">
    <video
      id="video1"
      :poster="poster"
      oncontextmenu="return false;"
      playsinline
      autoplay
      muted
    >
      <source :src="videoURL" type="video/mp4" />
      <source :src="videoWebmURL" type="video/webm" />
      <source :src="videoOggURL" type="video/ogg" />
    </video>
  </div>
</template>

<script>
export default {
  props: {
    videoURL: String,
    videoWebmURL: String,
    videoOggURL: String,
    poster: String
  },
};
</script>

<style lang="css" scoped>
.video-wrapper,
#video1 {
  position: relative;
  width: 100%;
  max-width: 100%;
  outline: none;
}
.video-wrapper:focus {
  outline: none;
}
</style>