<template>
  <section class="message">
    <div class="message-content" ref="message-content">
      <p class="text-small text-muted" v-if="!currentMessages.length">
        não há mensagens no momento
      </p>
      <ul v-else class="message-content-list">
        <li
          v-for="(message, i) in currentMessages"
          :key="i"
          class="message-content-li"
        >
          <p
            class="text-small"
            :class="`${message.id === index ? 'me' : 'you'}`"
          >
            {{ messageLabel(message) }}
          </p>
        </li>
      </ul>
    </div>
    <button
      @click="destroy()"
      class="destroy-c"
      :class="{ destroyed: destroyed }"
    >
      {{ setLabel(index) }}
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
      destroyed: false,
      currentMessages: [...this.messages],
      messageEventsService: new MessageEventsService(this),
    };
  },

  methods: {
    scrollToBottom() {
      const el = this.$refs["message-content"];
      el.scrollTop = el.scrollHeight;
    },

    destroy() {
      this.destroyed = true;
      this.$nextTick(() => this.$destroy());
      this.$emit("destroyed", this.index);
    },

    setLabel(index) {
      return this.destroyed ? `Componente ${index} destruído` : `Destruir`;
    },

    messageLabel(message) {
      const itsMe = message.id === this.index;
      return itsMe ? message.content : `chat-${message.id}: ${message.content}`;
    },
  },

  mounted() {
    this.messageEventsService.on("new-message", (data) => {
      this.currentMessages.push(data);
      this.$nextTick(() => this.scrollToBottom());
    });
  },
};
</script>

<style scoped>
.destroy-c {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  background: transparent;
  border: 1px solid #3f3f3f57;
  color: #3f3f3fc5;
  cursor: pointer;
  font-size: 0.7rem;
  transition: 0.2s;
}

.destroy-c:hover,
.destroy-c:focus,
.destroyed {
  background: #c08c8c;
  border: 1px solid transparent;
  color: #fff;
}

.message {
  margin: 2rem auto;
}

.message-content {
  border: 1px solid #3f3f3f57;
  border-radius: 0.4rem;
  min-height: 1rem;
  max-height: 10rem;
  max-width: 85%;
  margin: 0rem auto;
  padding: 1rem;
  overflow: hidden;
  overflow-y: auto;
}

.message-content-list {
  overflow: hidden;
  padding: 0 1rem;
  /* width: 100%; */
}

.message-content-li {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-small {
  font-size: 0.7rem;
  line-height: 1rem;
}
.text-muted {
  opacity: 0.8;
}

.me {
  align-self: flex-end;
  text-align: right;
  background-color: #acaaaa;
  color: rgb(37, 37, 37);
  word-break: break-all;
  width: fit-content;
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.3rem;
  border-radius: 0.4rem 0.4rem 0 0.4rem;
}

.you {
  background-color: #5aa4a8;
  color: rgb(235, 235, 235);
  text-align: left;
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.3rem;
  width: fit-content;
  word-break: break-all;
  border-radius: 0.4rem 0.4rem 0.4rem 0rem;
}

::-webkit-scrollbar {
  width: 0.3rem;
  height: 0rem;
}
</style>
