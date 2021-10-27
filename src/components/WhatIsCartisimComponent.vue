<template>
  <div class="page-layout-2">
    <div class="page-layout-2-top">
      <h1 v-scrollanimation>{{ $t("whatIsTitle") }}</h1>
    </div>
    <div class="page-layout-2-info">
      <p v-scrollanimation>{{ $t("whatIsText") }}</p>
        <h5 v-scrollanimation>{{ $t("whatIsSmallText") }}</h5>
    </div>
    <div v-scrollanimation class="page-layout-2-flex-box">
      <div class="icon-wrap">
        <icon name="cardStack" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.cards {
  max-width: 100%;
}

.pro {
  margin: 0 auto;
  padding-left: 100px;
  transition-delay: 0.3s;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, red, red 50%, rgb(26, 26, 26) 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
  text-align: right;
  cursor: pointer;
}

.pro:hover {
  transition: 1s;
  animation: linear infinite;
  background-position: 0 100%;
  cursor: pointer;
}
.what-flex-box > div:nth-child(1) {
  transition-delay: 0.1s;
}

.what-flex-box > div:nth-child(2) {
  transition-delay: 0.2s;
}

.what-flex-box > div:nth-child(3) {
  transition-delay: 0.3s;
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

@media screen and (max-width: 768px) {
  .what-top {
    padding-top: 50px;
  }
  .what-info {
    padding: 0;
    width: 90%;
    margin: 40px auto;
  }
  .what-flex-box {
    flex-direction: column;
  }
  .icon-wrap {
    display: none;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
  .page-layout-2-top {
    padding-top: 300px;
}
  h1 {
    font-size: 6rem;
  }
  p,
  article {
    font-size: 4rem;
    line-height: 4.5rem;
  }
}
</style>