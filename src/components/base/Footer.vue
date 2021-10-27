<template>
  <footer class="footer">
    <div class="affiliate">
      <affiliate />
    </div>
    <div class="web-footer">
      <ul class="icon-list">
        <a href="https://wa.me/message/GHW2OS2PURG4G1">
          <img
            class="wa"
            :src="whatsApp"
            alt="Whats App Logo"
            oncontextmenu="return false;"
          />
        </a>

        <a href="https://wa.me/message/GHW2OS2PURG4G1">
          <img
            class="qr-code"
            :src="whatsAppQRCode"
            alt="Whats App QR Code"
            oncontextmenu="return false;"
          />
        </a>
      </ul>

      <h3>
        <router-link to="/privacy"> {{ $t("privacy") }} | </router-link>
        <a href="https://www.cartisim.io"
          >Cartisim&copy;{{ new Date().getFullYear() }}</a
        >
        <router-link to="/terms"> | {{ $t("terms") }}</router-link>
      </h3>

      <ul class="icon-list">
        <a href="https://www.instagram.com/cartisimdevelopment/">
          <img :src="instagram" alt="instagram" oncontextmenu="return false;" />
        </a>

        <a href="https://twitter.com/cole97309135">
          <img :src="twitter" alt="twitter" oncontextmenu="return false;" />
        </a>

        <a href="https://www.linkedin.com/in/cole-m-2b4878169">
          <img :src="linkedin" alt="linkedin" oncontextmenu="return false;" />
        </a>
      </ul>
    </div>

    <div class="mobile-footer">
      <ul class="icon-list">
        <a href="https://wa.me/message/GHW2OS2PURG4G1">
          <img
            class="wa"
            :src="whatsApp"
            alt="Whats App Logo"
            oncontextmenu="return false;"
          />
        </a>

        <a href="https://wa.me/message/GHW2OS2PURG4G1">
          <img
            class="qr-code"
            :src="whatsAppQRCode"
            alt="Whats App QR Code"
            oncontextmenu="return false;"
          />
        </a>
      </ul>

      <ul class="icon-list">
        <a href="https://www.instagram.com/cartisimdevelopment/">
          <img :src="instagram" alt="instagram" oncontextmenu="return false;" />
        </a>

        <a href="https://twitter.com/cole97309135">
          <img :src="twitter" alt="twitter" oncontextmenu="return false;" />
        </a>

        <a href="https://www.linkedin.com/in/cole-m-2b4878169">
          <img :src="linkedin" alt="linkedin" oncontextmenu="return false;" />
        </a>
      </ul>

      <h3>
        <router-link to="/privacy"> {{ $t("privacy") }} | </router-link>
        <a href="https://www.cartisim.io"
          >Cartisim&copy;{{ new Date().getFullYear() }}</a
        >
        <router-link to="/terms"> | {{ $t("terms") }}</router-link>
      </h3>
    </div>
  </footer>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Affiliate from "../controls/Affiliate.vue";
export default {
  components: { Affiliate },
  setup() {
    const store = useStore();

    const facebook = computed(() => store.getters["S3/facebook"]);
    const instagram = computed(() => store.getters["S3/instagram"]);
    const twitter = computed(() => store.getters["S3/twitter"]);
    const linkedin = computed(() => store.getters["S3/linkedin"]);
    const whatsApp = computed(() => store.getters["S3/whatsApp"]);
    const whatsAppQRCode = computed(() => store.getters["S3/whatsAppQRCode"]);

    function appStoreClicked() {
      window.location.replace("https://cartisim.io");
    }
    return {
      appStoreClicked,
      facebook,
      instagram,
      twitter,
      linkedin,
      whatsApp,
      whatsAppQRCode,
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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