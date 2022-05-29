import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routes from './router';
import storeOptions from './store';
import './assets/css/main.css';

// Todo: Update this when publishing
// import drizzleVuePlugin from '@drizzle/vue-plugin'
//
import drizzleVuePlugin from '@drizzle/vue-plugin';
import drizzleOptions from './drizzleOptions';

Vue.use(Vuex).use(VueRouter);

const store = new Vuex.Store(storeOptions);
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(drizzleVuePlugin, { store, drizzleOptions });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
