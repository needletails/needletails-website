<template>
  <div class="nf">
    <div class="nf-top">
      <h1 v-scrollanimation>
        {{ $t('nf') }}
      </h1>
    </div>
  </div>
</template>

<script setup>
// 404 page setup
</script>

<style lang="css" scoped>
.nf {
  position: relative;
  top: 200px;
  background-color: white;
  padding-bottom: 100px;
  overflow: clip;
  min-height: calc(100vh - 0px);
}
.nf-top {
  padding-top: 100px;
  background-color: rgb(26, 26, 26);
}
h1 {
  font-weight: bolder;
  transition-delay: 0.1s;
  color: white;
  font-size: 2.9rem;
  padding-bottom: 40px;
  margin-left: 40px;
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
</style>
