<template>
  <h3>{{ title }}</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>

<style lang="css" scoped>
h3 {
  position: relative;
  background-color: black;
  border: solid 1px white;
  border-radius: 5px;
  padding: 5px;
  top: 5px;
  text-align: center;
  color: white;
}
</style>
