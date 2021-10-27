<template>
  <div class="page-layout-2">
    <div class="page-layout-2-top">
      <h1 v-scrollanimation>{{ $t("projectTitle") }}</h1>
      <h3 v-scrollanimation>{{ $t("projectText") }}</h3>
    </div>
    <div class="page-layout-2-flex-box">
      <div v-scrollanimation>
        <h2>{{ $t("project1Title") }}</h2>
        <h3>{{ $t("project1") }}</h3>
          <h4 class="visitButton" @click="caritisimApp()">Visit Website</h4>
      </div>
      <div v-scrollanimation>
        <h2>{{ $t("project2Title") }}</h2>
        <h3>{{ $t("project2") }}</h3>
          <h4 class="visitButton" @click="cba()">Visit Website</h4>
      </div>
      <div v-scrollanimation>
        <h2>{{ $t("project3Title") }}</h2>
        <h3>{{ $t("project3") }}</h3>
         <h4 class="visitButton" @click="cba()">Visit Website</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  setup() {
    function goPro() {
      window.location.replace("");
    }

    function caritisimApp() {
        window.location.replace("https://cartisimapp.io")
    }

    function cba() {
        window.location.replace("https://github.com/cbajapan")
    }

    return {
      goPro,
      caritisimApp,
      cba
    };
  },
};
</script>

<style lang="css" scoped>
.visitButton {
   color: steelblue;
   float: right;
   padding: 20px;
   transition: all .2s ease-in-out; 
}

.visitButton:hover {
    cursor: pointer;
transform: scale(1.1); 
}

.page-layout-2-flex-box > div > h2 {
    text-align: left;
    padding: 20px;
}

.page-layout-2-flex-box > div > h3 {
    margin-left: 40px;
}

.page-layout-2 {
  padding: 100px 100px 250px 100px;
  top: 0;
}
.page-layout-2,
.page-layout-2-flex-box,
.page-layout-2-info,
.page-layout-2-top,
p {
  background-color: rgb(26, 26, 26);
  color: white;
}

.page-layout-2-flex-box > div > h3 {
  margin-bottom: 60px;
}

.page-layout-2-flex-box > div {
    margin: 40px auto;
    width: 100%;
    max-width: 90%;
  background-color: rgb(18, 18, 18);
  box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25);
}

.page-layout-2-flex-box > div:nth-child(1) {
  transition-delay: 0.1s;
}

.page-layout-2-flex-box > div:nth-child(2) {
  transition-delay: 0.2s;
}

.page-layout-2-flex-box > div:nth-child(3) {
  transition-delay: 0.3s;
}

  .page-layout-2-flex-box {
    flex-direction: column;
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
  .page-layout-2 {
    padding: 0 0 20px 0;
  }

  .page-layout-2-info {
    padding: 0;
    width: 90%;
    margin: 40px auto;
  }

  h3 {
    margin: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .page-layout-2 {
    padding: 0 0 0 0;
  }
  .page-layout-2-flex-box > div {
    margin: 0x;
  }
}

@media screen and (max-width: 1250px) {
    .page-layout-2-top {
       padding-top: 250px;
  }
  .page-layout-2 {
    padding: 0 0 0 0;
  }
  .page-layout-2-flex-box > div {
    margin: 0x;
  }
}



@media screen and (min-width: 3840px) and (min-height: 2160px) {
  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 5rem;
  }

  h3 {
    font-size: 4rem;
    line-height: 5.7rem;
  }

  .page-layout-2-flex-box > div {
    padding: 100px;
  }
}
</style>