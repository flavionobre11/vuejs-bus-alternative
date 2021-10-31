<template>
  <section>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <p>
          {{ message }}
        </p>
      </li>
    </ul>
    <button @click="$destroy()">Destroy message 2</button>
  </section>
</template>

<script>
import { MessageEventsService } from '../services/events/message.events'
export default {
  props: {
      messages: Array
  },
  data(){
    return {
      messageEventsService: new MessageEventsService(this)
    }
  },
  mounted(){
    this.messageEventsService.on('new-message', (data) => this.messages.push(data.message+' - message 2'))
  }
}
</script>


