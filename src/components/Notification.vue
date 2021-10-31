<template>
  <section>
    <p v-if="count">📭 {{ count }} novas mensagens</p>
    <p v-else>Sem novas mensagens :)</p>
  </section>
</template>

<script>
import { MessageEventsService } from "../services/events/message.events";
export default {
  data() {
    return {
      messageEventsService: new MessageEventsService(this),
      count: 0,
    };
  },

  mounted() {
    this.messageEventsService.on("new-message", () => (this.count += 1));
  },
};
</script>
