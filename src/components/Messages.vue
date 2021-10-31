<template>
  <section>
    <div class="message-content">
      <p class="text-small text-muted" v-if="!messages.length">
        não há mensagens no momento
      </p>
      <ul v-else>
        <li v-for="(message, index) in messages" :key="index">
          <p>
            {{ message }}
          </p>
        </li>
      </ul>
    </div>
    <button @click="$destroy()" class="destroy-c">
      destroy component {{ index }}
    </button>
  </section>
</template>

<script>
import { MessageEventsService } from "../services/events/message.events";
export default {
  props: {
    messages: Array,
    index: Number,
  },
  data() {
    return {
      messageEventsService: new MessageEventsService(this),
    };
  },
  mounted() {
    this.messageEventsService.on("new-message", (data) =>
      this.messages.push(`${data.message} (component ${this.index})`)
    );
  },
};
</script>

<style scoped>
.destroy-c {
  margin: 1rem 0;
  padding: 0.2rem 1rem;
}
.message-content {
  border: 1px solid #ececec;
  min-height: 1rem;
  max-width: 85%;
  margin: 0 auto;
  padding: 1rem;
}

.text-small {
  font-size: 0.7rem;
}
.text-muted {
  opacity: 0.8;
}
</style>
