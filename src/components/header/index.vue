<template>
  <div class="header-component">
    <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    >
      <v-list dense>
        <v-list-item
          v-for="([text, link], i) in items"
          :key="i"
          link
          @click=""
        >
          <v-list-item-content>
            <v-btn v-if = " i === 4 " class="mobile-center-btn" @click="">
              <span class="join-btn-title">Join Now!</span>
            </v-btn>
            <v-list-item-title v-else class="mobile-center-text">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      :color="color"
      :flat="flat"
      class="logo-position"
      :class="{ expand: flat }"
    >
      <div>
        <v-img src="@/assets/img/Logo.svg" id="header-logo" class="header-logo" />
      </div>
      <v-spacer />
      <v-btn class="join-btn-position" v-if="isXs" @click="$vuetify.goTo('#')">
        <span class="join-btn-title">Join Now!</span>
      </v-btn>
      <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      v-if="isXs"
      />
      <div class="header-list" v-else>
        <v-list-item
        v-for="([text, link], i) in items"
        :key="i"
        link
        @click=""
        >
          <v-btn v-if = " i === 4 " class="join-btn-position" @click="">
            <span class="join-btn-title">Join Now!</span>
          </v-btn>
          <v-btn text v-else class="header-list-position" @click="">
            <span class="header-list-title">{{ text }}</span>
          </v-btn>
        </v-list-item>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
  .header-component {
    height: 75px !important;
  }
  .mobile-center-text {
    text-align: center !important;
  }
  .logo-position {
    padding: 0 160px;
    justify-content: space-between;
    align-items: center;
    width: 100% !important;
  }
  .header-list-title{
    color: var(--464646, #232323);
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .header-list-position {
    padding: 0 !important;
    text-transform: none !important;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .header-list{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 !important;
  }
  .join-btn-position {
    padding: 0 !important;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: 2px solid var(--464646, #232323); 
    height: 42px !important;
    text-transform: none !important;
    text-align: center !important;
  }
  .mobile-center-btn {
    padding: 0 !important;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: 2px solid var(--464646, #232323); 
    text-transform: none !important;
    text-align: center !important;
    width: 125px;
  }
  .join-btn-title {
    color: var(--464646, #232323);
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    padding: 10px 30px;
    height: 42px !important;
    width: 142px !important;
  }
  .v-toolbar {
    transition: 0.6s;
  }
  .expand {
    height: 75px !important;
    padding-top: 10px;
  }
  .header-logo {
    width: 203px !important;
  }
  @media (max-width: 570px) {
    .logo-position  {
			padding: 0 !important;
    }
    .header-logo {
      width: 155px !important;
    }
}

</style>

<script>

export default {

  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      [ "Search", "#Search" ],
      [ "Individual", "#Individual" ],
      [ "Enterprise", "#Enterprise" ],
      [ "Sign in", "#Sign in" ],
      [ "Join Now!", "#Join Now!" ],
    ],
  }),

  props: {
    color: String,
    flat: Boolean,
  },

  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};

</script>
