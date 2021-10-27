<template>
  <div class="reasons">
    <text-field
      class="text-field"
      size="medium"
      type="text"
      placeholder="Search For an Article"
      @modelValue="resultQuery($event)"
    ></text-field>

    <div class="center">
      <tech-article id="Article" :list-data="resultQuery()"></tech-article>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import TechArticle from "../components/TechArticle.vue";

export default {
  components: {
    TechArticle,
  },
  setup() {
    let searchQuery = ref("");
    const store = useStore();

    const techArticles = computed(
      () => store.getters["TechArticles/techArticles"]
    );

    // function resultQuery(data) {
    //    console.log(data)
    //   if (data !== undefined) {
    //     return techArticles.value.filter((article) => {
    //       return searchQuery.value
    //         .toLowerCase()
    //         .split(" ")
    //         .every((v) => article.title.toLowerCase().includes(v));
    //     });
    //   } else if (data != "") {
    //     return techArticles.value.filter((article) => {
    //       return searchQuery.value
    //         .toLowerCase()
    //         .split(" ")
    //         .every((v) => article.title.toLowerCase().includes(v));
    //     });
    //   } else {
    //     return techArticles;
    //   }
    // }

    function resultQuery(data) {
      if (data === undefined) {
        data = "";
      }
      if (data !== undefined) {
        const filteredData = techArticles.value.filter((article) => {
          const searchStr = data.toLowerCase();
          const searchResults = article.every((article) =>
            article.title.toLowerCase().includes(searchStr)
          );
          console.log(filteredData)
          return searchResults;
        });
      } else if (data != "") {
        const filteredData = techArticles.value.filter((article) => {
          const searchStr = data.toLowerCase();
          const searchResults = article.every((article) =>
            article.title.toLowerCase().includes(searchStr)
          );
          console.log(filteredData);
          return searchResults;
        });
      } else {
        return techArticles;
      }
    }

    return {
      searchQuery,
      techArticles,
      resultQuery,
    };
  },
};
</script>

<style lang="css" scoped>
.reasons {
  position: relative;
  background-color: white;
  padding-bottom: 100px;
  overflow: clip;
}

.text-field {
  margin-bottom: 20px;
}
.reasons-flex-box {
  display: flex;
  justify-content: space-around;
}

h2 {
  font-weight: bold;
  font-style: italic;
  text-align: center;
}

.reasons-flex-box > div:nth-child(1) {
  transition-delay: 0.1s;
}

.reasons-flex-box > div:nth-child(2) {
  transition-delay: 0.2s;
}

.reasons-flex-box > div:nth-child(3) {
  transition-delay: 0.3s;
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

@media screen and (max-width: 768px) {
  .reasons-flex-box {
    flex-direction: column;
  }
}
</style>