// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import vue2Animate from 'vue2-animate/dist/vue2-animate.min.css'
import animate from 'animate.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
// Vue.use(vue2Animate)
Vue.use(animate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
