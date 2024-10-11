<template>
  <div class="intro">
    <div v-scrollanimation>
      <h1>{{ $t('introHeaderOne') }}</h1>
      <h3>{{ $t('introHeaderTwo') }}</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
h1 {
  font-weight: bolder;
  margin: 0;
  padding: 0;
}
.intro {
  position: relative;
  width: 90%;
  top: 250px;
  background-color: rgb(8, 8, 8);
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  color: white;
  box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25) !important;
  -moz-box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25) !important;
  -webkit-box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25) !important;
}

.intro > div:first-child {
  padding: 100px;
  display: flex;
  flex-direction: column;
  min-width: 450px;
}

svg {
  padding-top: 120px;
}

.mac-button {
  padding-top: 20px;
}

.before-enter {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 1s cubic-bezier(0.41, 0.01, 0.57, 1.61);
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}

@media screen and (max-width: 855px) {
  .intro {
    width: 100%;
    display: block;
    top: 200px;
    padding-top: 50px;
    padding-bottom: 100px;
  }
  .intro > div:first-child {
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    display: block;
    min-width: auto;
  }

  .intro > div:first-child > h3 {
    padding-top: 10px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 1024px) {
  .intro {
    top: 250px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1336px) {
  .intro {
    padding: 20px;
  }
  .intro > div {
    width: 50%;
  }
  .intro > div:first-child {
    min-width: 0;
    padding: 0;
  }
}
@media screen and (min-width: 3840px) and (min-height: 2160px) {
  .intro {
    top: 500px;
  }
}
</style>
>
