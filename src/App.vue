<template>
  <div id="app">
    <Left/>
    <Right/>
  </div>
</template>

<script>
import Left from './components/Left.vue'
import Right from './components/Right.vue'

export default {
  name: 'app',
  components: {
    Left, Right
  }
}
</script>

<style lang="scss">
  #app {
    display: flex;
  }
</style>

