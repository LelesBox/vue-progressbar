import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueProgressBar from './progressbar'

Vue.use(VueResource)
Vue.use(VueProgressBar)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App: App
  }
})
