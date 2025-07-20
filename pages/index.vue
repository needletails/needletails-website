<template>
  <div class="min-h-screen bg-black">
    <Header />
    <main>
      <intro />
      <business-overview />
      <featured-app />
      <projects-component />
      <solutions-component />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/base/header.vue';
import Footer from '../components/base/footer.vue';
import Intro from '../components/introductory-component.vue';
import BusinessOverview from '../components/business-overview.vue';
import FeaturedApp from '../components/featured-app/featured-app.vue';
import ProjectsComponent from '../components/projects-component.vue';
import SolutionsComponent from '../components/solutions-content/solutions-component.vue';
</script>