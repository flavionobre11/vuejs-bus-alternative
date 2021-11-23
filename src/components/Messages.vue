<template>
  <section class="message">
    <div class="message-content" ref="message-content">
      <p class="text-small text-muted" v-if="!messages.length">
        não há mensagens no momento
      </p>
      <ul v-else class="message-content-list">
        <li v-for="(message, index) in messages" :key="index">
          <p class="text-small">
            {{ message }}
          </p>
        </li>
      </ul>
    </div>
    <button @click="destroy()" class="destroy-c" :class="{'destroyed': destroyed}">
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
      messageEventsService: new MessageEventsService(this),
    };
  },

  methods: {
    scrollToBottom() {
      const el = this.$refs['message-content']
      el.scrollTop = el.scrollHeight;
    },

    destroy(){
      this.destroyed = true
      this.$nextTick(() => this.$destroy())
    },

    setLabel(index){
      return this.destroyed ? `Componente ${index} destruído` : `Destruir`
    }
  },

  mounted() {
    this.messageEventsService.on("new-message", (data) =>{
      if(!data.message) return;
      this.messages.push(`${data.message} (component ${this.index})`)
      this.$nextTick(() => this.scrollToBottom())
    }
    );
  },
};
</script>

<style scoped>
.destroy-c {
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: .4rem;
  background: transparent;
  border: 1px solid #3f3f3f57;
  color: #3f3f3fc5;
  cursor: pointer;
  font-size: .7rem;
  transition: .2s;
}


.destroy-c:hover,
.destroy-c:focus, .destroyed {
    background: #C08C8C;
  border: 1px solid transparent;
  color: #fff;
}

.message {
  margin: 2rem auto;

}

.message-content {
  border: 1px solid #3f3f3f57;
  border-radius: .4rem;
  min-height: 1rem;
  max-height: 10rem;
  max-width: 85%;
  margin: 0rem auto;
  padding: 1rem;
  overflow: hidden;
  overflow-y: auto ;
}

.message-content-list {
  overflow: hidden;
  padding: 0 1rem;
}

.text-small {
  font-size: 0.7rem;
  line-height: 1rem;;
}
.text-muted {
  opacity: 0.8;
}

::-webkit-scrollbar {
	width: 0.3rem;
	height: 0rem;
}
</style>
