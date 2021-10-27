<template>
  <div v-scrollanimation class="full-stack">
        <h2>{{ $t("fullStack")}}</h2>
  </div>   
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.full-stack {
  margin-top: 200px;
  margin-left: 50px;
  transition-delay: .1s;
  z-index: 99;
}

h2 {
  font-style: italic;
  position: relative;
  display: inline-block;
  font-size: 2em;
  font-weight: 800;
  overflow: hidden;
  background: linear-gradient(to right, red, red 50%, rgb(26, 26, 26) 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
}

h2:hover {
  transition: 1s;
  animation:linear infinite;
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
@media screen and (max-width: 767px) {
.full-stack {
margin: 0 auto;
}
.full-stack > h2 {
text-align: center;
}
}
</style>