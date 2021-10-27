<template>
  <div class="banner">
    <p><i>{{ $t("bannerMessage")}}</i></p>
    <b><a href="https://cartisimapp.io">Cartisimapp.io</a></b>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.banner {
  position: fixed;
  top: 155px;
  width: 100%;
  height: 45px;
  background-color: rgb(32, 152, 243);
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner > p {
  text-align: center;
  color: white;
  padding: 10px;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: black;
  transition: .3s;
}

@media screen and (max-width: 768px) {
  .banner {
    top: 155px;
    height: 90px;
    flex-direction: column;
  }
  p {
    margin: 0 auto;
  }
}

@media screen and (max-width: 767px) {
  .banner {
    top: 115px;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
.banner {
  top: 270px;
  height: 85px;
}
.banner > p, a {
font-size: 2.2rem;
}
}
</style>