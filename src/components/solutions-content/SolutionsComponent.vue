<template>
  <div>
    <backend-development />
    <native-development />
    <web-development />
  </div>
</template>

<script>
import BackendDevelopment from './BackendDevelopment.vue';
import NativeDevelopment from './NativeDevelopment.vue';
import WebDevelopment from './WebDevelopment.vue';

export default {
  components: {
    BackendDevelopment,
    NativeDevelopment,
    WebDevelopment,
  },
  setup() {},
};
</script>

<style scoped></style>
