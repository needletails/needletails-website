<template>
  <transition name="fade">
    <div v-if="checkPolicies === false" class="snack">
      <div>
        <p>
          {{ $t('privacyPolicy.introduction.welcomeMessage') }}
          <br />
          {{ $t('privacyPolicy.introduction.purpose') }}
        </p>
      </div>
      <div>
        <div>
          <base-button :title="accept" @click="clicked()" />
        </div>
        <div class="policies">
          <router-link to="/privacy">
            {{ $t('privacyPolicy.title') }}
          </router-link>
          <router-link to="/terms">
            {{ $t('termsConditions') }}
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, computed } from 'vue';
import BaseButton from '../controls/BaseButton.vue';
export default {
  components: { BaseButton },
  setup() {
    const { t } = useI18n();
    const accept = computed(() => t('accept'));
    let checkPolicies = ref(localStorage.getItem('policiesAccepted'));

    if (checkPolicies.value === null) {
      checkPolicies.value = false;
    } else {
      checkPolicies.value = localStorage.getItem('policiesAccepted');
    }
    function clicked() {
      localStorage.setItem('policiesAccepted', true);
      checkPolicies.value = localStorage.getItem('policiesAccepted');
    }
    return {
      clicked,
      checkPolicies,
      accept,
    };
  },
};
</script>

<style lang="css" scoped>
.snack {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 145px;
  background-color: rgba(26, 26, 26, 0.9);
  z-index: 998;
  display: flex;
  justify-content: space-around;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.snack > div > p {
  text-align: center;
  color: white;
  margin: 10px;
  text-align: left;
  font-size: 1.3rem;
  font-weight: 200;
  width: 60%;
}
.snack > div:last-child {
  margin: 20px;
  width: 50%;
}
a {
  color: white;
  text-decoration: none;
  margin: 10px;
  text-align: right;
}

a:hover {
  color: red;
}
.policies {
  display: flex;
  justify-content: flex-end;
  margin-bottom: auto;
  margin: 5px;
}

h3:hover {
  color: rgb(32, 152, 243);
  border: solid 1px rgb(32, 152, 243);
  cursor: pointer;
}

@media screen and (max-width: 1380px) {
  .snack {
    height: 150px;
  }
  .snack > div:first-child {
    width: 50%;
  }

  h3 {
    width: 200px;
  }
  .snack > div > p {
    font-size: 1.2rem;
    width: 100%;
  }
  .snack > div:last-child > div:first-child {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
  }
}

@media screen and (max-width: 768px) {
  .snack {
    height: 190px;
  }
  .snack > div:first-child {
    width: 50%;
  }

  h3 {
    max-width: 300px;
  }
  .snack > div > p {
    font-size: 1.2rem;
    width: 100%;
  }
  .snack > div:last-child {
    margin-top: auto;
  }
}

@media screen and (max-width: 820px) {
  .snack {
    height: 220px;
    flex-direction: column;
  }
  .snack > div:first-child > p {
    font-size: 1rem;
    width: auto;
  }
  .snack > div:first-child {
    width: auto;
  }

  .snack > div:last-child {
    width: auto;
    margin: 5px;
    margin-bottom: auto;
    max-width: 100%;
  }

  h3 {
    padding: 0;
  }
  h3,
  a {
    margin-left: 0;
    max-width: 100% !important;
    width: 100%;
    margin: 0;
  }
  .policies {
    padding: 10px;
    justify-content: space-around;
  }
  a {
    text-align: center;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
  .snack {
    height: 320px;
  }
  .snack > div:first-child > p {
    font-size: 3.3rem;
    padding: 40px;
  }

  a {
    font-size: 2.5rem;
  }
}
</style>
