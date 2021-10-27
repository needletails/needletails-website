<template>
  <div class="testimonials">
    <div>
      <h1 v-scrollanimation>{{ $t("buildingBlocks") }}</h1>
    </div>
    <div class="card-wrapper">
      <contact-card />
    </div>
  </div>
</template>

<script>
import ContactCard from "./controls/ContactCard.vue";
export default {
  components: { ContactCard },
};
</script>

<style lang="css" scoped>
.testimonials {
  position: relative;
  padding: 20px;
  background-color: rgb(25, 85, 131);
}

h1 {
  padding-bottom: 50px;
  font-weight: 300;
  font-size: 2.5rem;
}

.card-wrapper {
  display: flex;
  overflow-x: auto;
  align-content: flex-start;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  justify-content: center;
}
.card-wrapper::-webkit-scrollbar {
  display: none;
}
h1,
h4 {
  text-align: center;
  color: white;
}
.before-enter {
  opacity: 0;
  transform: translateY(-100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
@media screen and (max-width: 767px) {
  .card-wrapper {
    flex-direction: column;
  }
}

@media screen and (max-width: 1024px) {
.card-wrapper { 
justify-content: flex-start;
}
}

@media screen and (min-width: 3840px) and (min-height: 2160px) {
    .card-wrapper {
      padding-bottom: 150px;
    }
  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 5rem;
  }

  h3 {
    font-size: 4rem;
    line-height: 5.7rem;
  }

  h4 {
    font-size: 3rem;
  }

  p,
  article {
    font-size: 2rem;
  }
}
</style>