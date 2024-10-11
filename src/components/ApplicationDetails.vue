<template>
  <div class="application-details">
    <div class="info-wrapper">
      <h1 v-scrollanimation>
        {{ $t('applicationTitle') }}
      </h1>
      <div v-scrollanimation>
        <li>{{ $t('applicationListItemOne') }}</li>
        <li>{{ $t('applicationListItemTwo') }}</li>
        <li>{{ $t('applicationListItemThree') }}</li>
        <li>{{ $t('applicationListItemFour') }}</li>
        <li>{{ $t('applicationListItemFive') }}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
};
</script>

<style lang="css" scoped>
.application-details {
  position: relative;
  padding-top: 320px;
  padding-bottom: 250px;
  display: flex;
  justify-content: space-around;
  background-color: black;
}

.info-wrapper {
  padding: 0 100px 0 30px;
  min-width: 550px;
  overflow: clip;
}
.info-wrapper > div {
  transition-delay: 0.1s;
}
h1 {
  text-align: left;
  color: white;
  font-size: 2.5rem;
}

li {
  color: white;
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 10px;
  font-size: 1.3rem;
}

.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s cubic-bezier(0.41, 0.01, 0.57, 1.61);
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}
@media screen and (max-width: 855px) {
  .application-details {
    padding-top: 100px;
    flex-direction: column-reverse;
  }
  .video-wrapper {
    margin-top: 40px;
  }
  .info-wrapper {
    padding: 0;
    min-width: 0;
  }
  .info-wrapper > h1 {
    text-align: center;
  }

  li {
    text-align: center;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
  .application-details {
    padding-top: 500px;
  }
  h1 {
    font-size: 6rem;
  }
  h4,
  li {
    font-size: 4rem;
  }
}
</style>
