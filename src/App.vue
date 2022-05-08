<template>
  <div id="app">
    <div class="home">
      <header-bar />
      <empty-agenda />
    </div>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import EmptyAgenda from "./components/EmptyAgenda.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    EmptyAgenda,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #f8f9fd;
}
</style>
