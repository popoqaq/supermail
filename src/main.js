import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')


const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err);
}
