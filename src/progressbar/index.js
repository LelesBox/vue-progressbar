import Vue from 'vue'
import eventEmitter from './eventbus'
import progressBar from './progressbar.vue'
let progress = function () {}

progress.install = function (Vue, options) {
  Vue.component('progress-bar', progressBar)
}

progress.start = function () {
  let index = 0
  if (!Vue.http) {
    throw Error('this plugin need use vue-resource before')
  } else {
    Vue.http.interceptors.push((request, next) => {
      eventEmitter.emit('start')
      index++
      next(response => {
        index--
        if (index === 0) {
          eventEmitter.emit('end')
        }
      })
    })
  }
}
export default progress
