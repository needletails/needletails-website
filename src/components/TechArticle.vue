<template>
  <div class="article-wrapper" v-if="listData">
    <div
      class="article-block outer-custom-box-color custom-box-shadow"
      v-for="article in paginatedData"
      :key="article.id"
    >
      <img :src="article.signedPosterURLString" oncontextmenu="return false;" />
      <div class="techArticle">
        <h2>{{ article.title }}</h2>
        <article>
          {{ article.intro }}
          <br />
        </article>
        <a @click="setID(article)" id="continue">continue reading</a>
      </div>
    </div>
    <div class="pageButtonWrapper">
      <button :disabled="listData.pageNumber === 0" @click="prevPage">
        Previous
      </button>
      <button
        :disabled="listData.pageNumber >= pageCount - 1"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  props: {
    listData: {
      type: Array,
      required: true,
    },
    amount: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  setup(props) {
    const pageNumber = ref(0);
    const store = useStore();
    const router = useRouter();
    store.dispatch("TechArticles/setArticleID");

    const pageCount = computed(() => {
      const l = props.listData.length
      const s = props.amount
      return Math.ceil(l / s);
    });

  const paginatedData = computed(() => {
      const start = pageNumber.value * props.amount
      const end = start + props.amount
      return props.listData.slice(start, end)
    });

    function nextPage() {
      this.pageNumber++;
    }
    function prevPage() {
      this.pageNumber--;
    }
   function setID(selectedArticle) {
      const id = selectedArticle.id;
      const res = store.dispatch("TechArticles/fetchEagerArticle", id);
      const title = selectedArticle.title.replace(/ /g, "");
      router.push({ name: "article-content", params: { id: title } });
      return res;
    }
    return {
      pageCount,
      paginatedData,
      nextPage,
      prevPage,
      setID,
    };
  },
};
</script>

<style lang="css" scoped>
.article-wrapper {
  position: relative;
  width: 75%;
  background-color: rgb(18, 18, 18);
  margin: 0 auto;
  box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25) !important;
  -moz-box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25) !important;
  -webkit-box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25) !important;
}
img {
  width: 20% !important;
  display: inline;
}

a {
  color: rgb(32, 151, 243);
  margin: 20px;
}

.article-block {
  width: 100%;
}

.techArticle {
  position: relative;
  display: block;
  text-align: left;
  margin: 0 auto;
  padding: 35px;
}

.techArticle > h3 {
  font-style: italic;
  font-weight: 600;
}
.techArticle > article {
  display: -webkit-box;
  text-indent: 20px;
  color: white;
  text-align: left;
}
.techArticle > h2 {
  color: white;
}

#continue {
  float: right;
}

.pageButtonWrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0 auto;
  width: 75%;
  margin-top: 40px;
  padding: 20px;
}

.pageButtonWrapper > button {
  outline: none;
  background-color: transparent;
  border: none;
  box-shadow: none;
  width: auto;
  color: rgb(32, 151, 243);
  margin: 0;
  font-size: 1.3rem;
}

.pageButtonWrapper > button:hover {
  color: silver;
}

@media screen and (max-width: 768px) {
  .article-wrapper {
    width: 100%;
  }

  article {
    padding: 10px;
  }
  .techArticle > h2 {
    padding-left: 20px !important;
  }
  img {
    width: 100% !important;
  }
  .Image {
    display: none;
  }
  .techArticle {
    padding: 0;
    width: auto;
    padding: 30px;
  }
  .techArticle > a {
    padding-right: 20px;
  }

  .article-block {
    margin: 40px auto;
    padding: 0 0 40px 0;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
  .techArticle {
    padding: 0;
  }
  .techArticle > h2 {
    padding: 5px;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  .techArticle {
    padding: 0;
  }
  .techArticle > h2 {
    padding: 5px;
  }
}

/* Landscape */
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .techArticle {
    padding: 0;
  }
  .techArticle > h2 {
    padding: 5px;
  }
}

/* Landscape */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .techArticle {
    padding: 50px;
  }
  .techArticle > h2 {
    padding: 5px;
  }
}

@media screen and (min-width: 3840px) {
  .techArticle {
    padding: 80px;
  }

  .pageButtonWrapper {
    padding-top: 50px;
  }
}
</style>
