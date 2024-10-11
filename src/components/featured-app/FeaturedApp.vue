<template>
  <div class="centered-container">
    <header class="header">
      <h1>Featured Apps</h1>
    </header>
    <div class="carousel">
      <div
        class="arrow left"
        :class="{ disabled: isFirstItem }"
        @click="prevItem"
      />
      <div class="carousel-item" @click="itemClicked(currentIndex)">
        <GridView
          :items="[featuredAppData[currentIndex]]"
          :subtitle-color="'#33BCE5'"
          :columns="1"
        />
      </div>
      <div
        class="arrow right"
        :class="{ disabled: isLastItem }"
        @click="nextItem"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import GridView from '../GridView.vue';

export default {
  components: {
    GridView,
  },
  setup() {
    const { t } = useI18n();
    const currentIndex = ref(0);

    const createGridItem = (
      applicationTitle,
      headerKey,
      descriptionKey,
      imagePosition,
      imagePath,
      externalUrl
    ) => ({
      subtitle: t(applicationTitle),
      header: t(headerKey),
      image: imagePath ? require(`@/assets/${imagePath}`) : null, // Only require the image if imagePath is not empty
      text: t(descriptionKey),
      alt: t(`${applicationTitle} image`),
      color: '#000000',
      fontColor: '#FFFFFF',
      imagePosition,
      externalUrl,
    });

    const featuredAppData = computed(() => [
      createGridItem(
        'featuredAppHeader',
        'featuredAppDescription',
        'featuredAppMessage',
        'aboveHeader',
        'Nudge.png',
        ''
      ),
      createGridItem(
        'featuredAppHeader3',
        'featuredAppDescription3',
        'featuredAppMessage3',
        'betweenText',
        'IslandHoppersLogo.png',
        ''
      ),
      createGridItem(
        'featuredAppHeader2',
        'featuredAppDescription2',
        'featuredAppMessage2',
        'aboveHeader',
        'StreamStack.png',
        ''
      ),
    ]);

    const nextItem = () => {
      if (currentIndex.value < featuredAppData.value.length - 1) {
        currentIndex.value++;
      }
    };

    const prevItem = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      }
    };

    const itemClicked = (index) => {
      // Handle item click, e.g., navigate to a detailed view
      console.log(`Item clicked: ${featuredAppData.value[index].header}`);
    };

    const isFirstItem = computed(() => currentIndex.value === 0);
    const isLastItem = computed(
      () => currentIndex.value === featuredAppData.value.length - 1
    );

    return {
      featuredAppData,
      currentIndex,
      nextItem,
      prevItem,
      itemClicked,
      isFirstItem,
      isLastItem,
    };
  },
};
</script>

<style scoped>
.centered-container {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; /* Reduced padding for better mobile view */
}

.header {
  text-align: center;
  margin-top: 20px; /* Adjusted margin */
  margin-bottom: 10px; /* Adjusted margin */
}

.header h1 {
  font-size: 2em; /* Adjusted font size for mobile */
  margin: 0;
  color: #F5F3B5;
}

.carousel {
  display: flex;
  align-items: center;
  overflow: hidden; /* Prevent overflow */
}

.carousel-item {
  margin: 0 10px; /* Reduced margin */
  cursor: pointer;
  max-width: 100%; /* Ensure it doesn't exceed the container */
  flex: 1; /* Allow it to grow and shrink */
}

.arrow {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #ffffff;
  cursor: pointer;
}

.arrow.left {
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #ffffff;
}

.arrow.right {
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #ffffff;
}

.arrow.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.arrow:hover:not(.disabled) {
  color: #0f52ba;
}

/* Media query for mobile devices */
@media screen and (max-width: 768px) {
  .centered-container {
    width: 90%; /* Adjusted width for mobile */
    padding: 10px; /* Further reduced padding */
  }

  .header h1 {
    font-size: 1.5em; /* Smaller font size for mobile */
  }

  .carousel-item {
    margin: 0 5px; /* Further reduced margin */
  }
}
</style>
