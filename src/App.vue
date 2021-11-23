<template>
  <div id="app">
    <Chat />
  </div>
</template>

<script>
require('./assets/css/reset.css')
import Chat from './components/Chat.vue'

export default {
  name: 'App',
  components: {
    Chat
  },
  created(){
    document.title = "Alternative To EventBus"
  }
}
</script>

<style>

@import url('./assets/css/global.css');

</style>
