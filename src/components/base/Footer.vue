<template>
  <footer class="footer">
    <iframe
  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
  frameborder="0"
  height="300"
  style="
    margin-top: 40px;
    margin-left: 40px;
    width: 100%;
    max-width: 300px;
    overflow: hidden;
    border-radius: 10px;
  "
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  src="https://embed.music.apple.com/us/playlist/chillhop-radio/pl.0b8321c00f68421f8081e5913de51118"
></iframe>
    <div class="affiliate">
      <affiliate />
    </div>
    <div class="web-footer">
      <ul class="icon-list" />

      <h3>
        <router-link to="/privacy"> {{ $t('privacy') }} | </router-link>
        <a href="https://www.needletails.com"
          >NeedleTails&copy;{{ new Date().getFullYear() }}</a
        >
        <router-link to="/terms"> | {{ $t('termsConditions') }} </router-link>
      </h3>

      <ul class="icon-list" />
    </div>

    <div class="mobile-footer">
      <ul class="icon-list" />

      <ul class="icon-list" />

      <h3>
        <router-link to="/privacy"> {{ $t('privacy') }} | </router-link>
        <a href="https://www.needletails.com"
          >NeedleTails&copy;{{ new Date().getFullYear() }}</a
        >
        <router-link to="/terms"> | {{ $t('termsConditions') }} </router-link>
      </h3>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Affiliate from '../controls/Affiliate.vue';
export default {
  components: { Affiliate },
  setup() {
    const store = useStore();

    function appStoreClicked() {
      window.location.replace('https://needletails.com');
    }
    return {
      appStoreClicked,
    };
  },
};
</script>

<style lang="css" scoped>
.footer {
  position: relative;
  margin-top: 120px;
  background-color: rgb(18, 18, 18);
}

.affiliate {
  margin-bottom: 100px;
}

.affiliate {
  display: flex;
  overflow-x: auto;
  align-content: flex-start;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
  justify-content: center;
}

.affiliate::-webkit-scrollbar {
  display: none;
}

a {
  text-decoration: none;
  color: white;
}

.mobile-footer {
  display: none;
}

.web-footer {
  position: relative;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-around;
}

.icon-list {
  display: flex;
  flex-direction: column;
  margin-top: auto;
}

.icon-list > a > img {
  width: 10%;
  padding: 10px;
  max-width: 100%;
}

.web-footer > h3 {
  margin: 3px;
  font-weight: 300;
  margin-top: auto;
}

.qr-code {
  width: 40% !important;
}

.wa {
  width: 20% !important;
}

@media screen and (max-width: 600px) {
  .footer {
    margin-top: 100px;
  }

  .web-footer {
    display: none;
  }

  .mobile-footer {
    position: relative;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .icon-list > a > img {
    width: 25%;
    margin: 30px;
  }

  .qr-code {
    width: 70% !important;
  }

  .wa {
    width: 40% !important;
  }
}

@media screen and (max-width: 767px) {
  .affiliate {
    flex-direction: column;
  }
}

@media screen and (max-width: 1024px) {
  .web-footer > h3 {
    width: 40%;
  }

  .affiliate {
    justify-content: flex-start;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
  .icon-list > a > img {
    width: 30%;
    padding: 30px;
  }

  .qr-code {
    width: 60% !important;
  }

  .wa {
    width: 40% !important;
  }
}
</style>
