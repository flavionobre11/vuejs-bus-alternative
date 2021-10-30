<template>
  
  <main>
    <Messages :messages="messages" />
    <InputMessage />
  </main>
</template>

<script>
export default {
  components: {
    Messages: () => import('./Messages.vue'),
    InputMessage: () => import('./Input.vue')
  },
  data() {
    return{
      messages: ['oiiii', 'vamoo', 'oh yeaaa']
    }
  }
}
</script>