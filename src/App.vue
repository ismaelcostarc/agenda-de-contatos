<template>
  <div id="app">
    <input type="text" v-mask="'####-##'" v-model="myInputModel" />

    <div class="home">
      <header-bar />
      <empty-agenda />
    </div>
  </div>
</template>

<script>
import HeaderBar from "./partials/HeaderBar.vue";
import EmptyAgenda from "./partials/EmptyAgenda.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
    EmptyAgenda,
  },
  data() {
    return {
      myInputModel: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #f8f9fd;
}
</style>
