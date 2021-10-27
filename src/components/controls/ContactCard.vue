<template>
  <div v-for="(contact, i) in contactInfo()" :key="i" class="contact-card">
    <div class="contact-img">
      <!-- <img :src="contact.image" alt="Contact" /> -->
    </div>
    <div class="contact-info">
      <h2>{{ contact.caption }}</h2>
      <p>
        <i>{{ contact.statement }}</i>
      </p>
    </div>
  </div>
</template>

<script>
// import { useStore } from "vuex";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    // const store = useStore();
    const { t } = useI18n({ useScope: "global" });

    const swift = computed(() => t("swift"));
    const swiftStatement = computed(() => t("swiftStatement"));
    const nio = computed(() => t("nio"));
    const nioStatement = computed(() => t("nioStatement"));
     const js = computed(() => t("js"));
    const jsStatement = computed(() => t("jsStatement"));
     const vapor = computed(() => t("vapor"));
    const vaporStatement = computed(() => t("vaporStatement"));
    // const ngCEO = computed(() => t("ngCEO"));
    // const ngStatement = computed(() => t("ngStatement"));

    // const cartisimCEOURL = computed(() => store.getters["S3/swiftURL"])

    // const daRioURL = computed(() => store.getters["S3/nioURL"])

    function contactInfo() {
      return [
        {
          // image: this.swiftURL,
          caption: swift.value,
          statement: swiftStatement.value,
        },
        {
          // image: this.nioURL,
          caption: nio.value,
          statement: nioStatement.value,
        },
        {
          caption: js.value,
          statement: jsStatement.value,
        },
        {
          caption: vapor.value,
          statement: vaporStatement.value,
        }
        // {
        //   image: this.daRioURL,
        //   caption: ngCEO.value,
        //   statement: ngStatement.value,
        // },
      ];
    }
    return {
      // swiftURL,
      // nioURL,
      contactInfo,
    };
  },
};
</script>

<style lang="css" scoped>
.contact-card {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
h2 {
  font-weight: bold;
  margin: 0 auto;
}

p {
  margin-left: 10px;
  line-height: 1.5rem;
  font-weight: 300;
}

.contact-img {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-info {
  position: relative;
  width: 300px;
  background-color: rgb(26, 26, 26);
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 4px 6px black;
  margin-left: 20px;
}

img {
  max-width: 100%;
  max-height: 100%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}
@media screen and (max-width: 767px) {
  .contact-card {
    flex-direction: column;
  }
  .contact-info {
    margin: 0 auto;
    width: 250px;
    min-width: 250px;
  }
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
  .contact-info {
width: 1000px;
  }

img {
  width: 100%;
  height: 100%;
}
  .contact-img {
  position: relative;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  }

  p {
  margin-left: 10px;
  line-height: 4.5rem;
  font-size:  3.5rem;
}
}
</style>