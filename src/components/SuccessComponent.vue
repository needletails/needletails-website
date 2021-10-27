<template>
  <div class="page-layout-2">
    <div v-if="verified" class="page-layout-2-top">
      <h1 v-scrollanimation>Success</h1>
    </div>
    <div v-else class="page-layout-2-top">
      <span><h1 v-scrollanimation>Error Resetting Password...</h1><h3><a href="mailto:inquiry@cartisim.io"> Contact Us</a></h3></span>
    </div>
          <!-- <router-link tag="button" to="/login">Login</router-link> -->
        </div>
        <div>
          <ul class="error-list" color="transparent" v-if="errors.length > 0">
            <li
              class="errors fadeIn truncate"
              v-for="error in errors"
              :key="errors.indexOf(error)"
            >
              {{ error }}
            </li>
          </ul>
        </div>
</template>

<script>

export default {
  data() {
    return {
      loading: false,
      errors: [],
      verified: true
    };
  },
};
</script>
<style scoped>
#Login {
  min-height: calc(80vh - 50px) !important;
}
a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: black;
}
.auth-wrapper {
  position: relative;
  min-width: 700px;
  max-width: 800px;
  top: 160px;
  margin: 0 auto !important;
  justify-content: center;
  display: block;
}

form {
  padding-top: 100px;
  width: 55% !important;
  max-width: 500px;
}

h1, a {
  padding: 30px 30px 30px;
  width: auto;
  align-items: top !important;
  display: block;
}

.submit {
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
}

label,
h1 {
  color: white;
}

.error-list {
  position: absolute;
  width: 100%;
  top: 58px;
}
.errors {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  color: red;
}

.submit > button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.submit > button {
  position: relative;
  text-align: center;
  cursor: pointer;
  color: white;
  font-size: 1.1rem;
  box-shadow: 0px 9px 18px 0 rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 9px 18px 0 rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 9px 18px 0 rgba(0, 0, 0, 0.25);
  background-color: black;
  border-top: black solid 0.5px;
  border-left: black solid 0.5px;
  border-right: black solid 0.5px;
  border-bottom: none;
  transition: all 0.5s;
  padding: 8px;
  margin: 16px;
}

.submit > button:hover {
  background-color: rgba(66, 133, 244, 1);
  animation-direction: alternate;
}

.submit > button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.submit > button:hover span {
  padding-right: 25px;
}

.submit > button:hover span:after {
  opacity: 1;
  right: 0;
}

@media screen and (max-width: 766px) {
  #Login {
    margin: 0 auto !important;
  }
  .auth-wrapper {
    max-width: 95%;
    margin: 0 auto;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 20px;
    min-width: 0;
    display: block;
  }

  form {
    width: 100% !important;
    max-width: 100% !important;
    padding-top: 0;
  }

  h1 {
    padding: 30px 30px 30px;
    width: auto;
    align-items: center !important;
    display: flex;
  }
}
@media screen and (min-width: 3840px) {
  .auth-wrapper {
    max-width: 1500px;
    top: 460px;
  }
  h1 {
    padding: 40px;
  }
  form {
    padding-top: 150px;
    max-width: 900px;
  }
  .error-list {
    position: absolute;
    width: 100%;
    top: 100px;
    padding-left: 50px;
  }
}
</style>
