<template>
  <v-app>
    <Heade :color="'transparent'" :flat="true" />
    <router-view></router-view>
    <Foote />
  </v-app>
</template>


<style scoped>

</style>

<script>
import Heade from "./components/header/index.vue";
import Foote from "./components/footer/index.vue";

export default {
  name: "App",

  components: {
    Heade,
    Foote,
  },
};
</script>
