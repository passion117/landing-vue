<template>
  <v-app>
    <v-main class="pt-0">
      <div class="ana_container">
        <Login />
        <Calendar />
      </div>
      <Enterprise />
      <div class="ana_container">
        <Features />
        <About />
      </div>
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>
  
<style scoped>
.v-main {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.ana_container {
  padding: 0 160px !important;
  background-color: #ffffff;
}
@media (max-width: 576px) {
    .ana_container  {
			padding: 0 20px !important;
    }
}
</style>

<script>
import Login from "../../components/login/index.vue";
import Calendar from "../../components/calendar/index.vue";
import Enterprise from "../../components/enterprise/index.vue";
import Features from "../../components/features/index.vue";
import About from "../../components/about/index.vue";

export default {

  name: "App",

  components: {
    Login,
    Calendar,
    Enterprise,
    Features,
    About,
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
  