<template lang="html">
  <div class="progress-bar" :style="{'width':width + '%','background-color':background,'opacity':opacity}">
  </div>
</template>

<script>
import eventEmitter from './eventbus'

export default {
  props: {
    background: {
      type: String,
      default: 'skyblue'
    }
  },
  data () {
    return {
      width: 0,
      opacity: 1,
      interval: null,
      tmot: null,
      normalSpeed: 1,
      lowSpeed: 0.1
    }
  },
  ready: function () {
    eventEmitter.on('start', () => {
      this.$el.style.display = 'block'
      this.opacity = 1
      this.width = 0
      this.progress()
    })
    eventEmitter.on('end', () => {
      this.width = 100
      this.tmot = setTimeout(() => {
        this.opacity = 0
        this.width = 0
        this.$el.style.display = 'none'
      }, 500)
    })
  },
  methods: {
    progress: function () {
      clearInterval(this.interval)
      clearTimeout(this.tmot)
      this.interval = setInterval(() => {
        if (this.width >= 70 && this.width < 96) {
          this.width += this.lowSpeed
        } else if (this.width >= 96) {
          clearInterval(this.interval)
        } else {
          this.width += this.normalSpeed
        }
      }, 100)
    }
  }
}
</script>

<style lang="css">
  .progress-bar{
    position: fixed;
    top:0;
    left:0;
    height: 2px;
    transition: all .3s ease;
    background-color: skyblue;
  }
</style>
