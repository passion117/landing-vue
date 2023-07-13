import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store";
import router from "./router";

new Vue({
  store,
	router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
