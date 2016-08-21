require('../release/vue-progressbar.css')
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueProgressBar from '../release/vue-progressbar'

Vue.use(VueResource)
Vue.use(VueProgressBar)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App: App
  }
})
