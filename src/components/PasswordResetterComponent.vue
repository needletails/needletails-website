<template>
  <div class="container">
    <div class="">
      <div class="custom-box-shadow outer-custom-box-color auth-wrapper">
        <h1 class="all_heading">Reset Password</h1>
        <form @submit.prevent="onSubmit()">
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
            <input
             class="input font"
              v-model="payload.password"
              type="password"
              placeholder="Enter Password..."
              required="required"
              id="password"
            />
            <br />
            <input
             class="input font"
              v-model="payload.confirmPassword"
              type="password"
              placeholder="Re-Enter Password..."
              required="required"
              id="confirmPassword"
            />
            <div class="submit">
              <button type="submit">
                <span>Reset Password</span>
              </button>
            </div>
            <div class="flex-button"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import errorHandler from "../config/error-handler";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useRoute } from 'vue-router'

export default {
  setup() {

      let loading = ref(false);
      let errors = ref([]);
    const store = useStore();
    const router = useRouter();
      const route = useRoute();
      const payload = ref({
        password: "",
        confirmPassword: "",
        token: route.query.token,
      });
   

    function onSubmit() {
      this.loading = true;
      try {
          console.log(payload, "PAYLOAD")
        const res = store.dispatch("Authentication/passwordReset", payload)
        loading = false;
        if (res.status >= 200 && res.status <= 398) {
          router.push({ name: "home" });
        }
        return res;
      } catch (error) {
        loading = false;
        errors = [];
        setTimeout(() => {
          this.errors = [];
        }, 3000);
        return errorHandler.handleError(error, errors);
      }
    }

    return {
        payload,
        loading,
        errors,
        onSubmit
    }
  },
};
</script>

<style scoped>
.container {
    padding: 150px;
}
.input {
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: block;
  height: 2.5rem !important;
  max-height: 4rem !important;
  /* border-radius: 5px; */
  box-sizing: border-box;
  border: none;
  text-indent: 10px;
  padding: 2px;
  background-color: rgba(18, 18, 18, 0.9);
  color: white;
}

*:focus,
textarea:focus,
.input:focus {
  outline: none;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#Login {
  min-height: calc(80vh - 50px) !important;
}

.auth-wrapper {
  position: relative;
  min-width: 700px;
  max-width: 800px;
  top: 160px;
  margin: 0 auto !important;
  justify-content: space-between;
  display: flex;
}

form {
  padding-top: 100px;
  width: 55% !important;
  max-width: 500px;
}

h1 {
  padding: 30px 30px 30px;
  width: auto;
  align-items: top !important;
  display: block;
}

.submit {
  float: right;
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

.flex-button {
  display: flex;
  justify-content: flex-end;
}

#appleid-signin {
  position: relative;
  height: 50px;
  display: none;
  margin-top: 20px;
}

#resetWrapper {
  position: relative;
  justify-content: flex-end;
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

  .container {
    padding: 150px 0 150px 0;
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
}
</style>
