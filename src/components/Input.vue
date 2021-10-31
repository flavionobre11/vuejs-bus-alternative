<template>
  <section>
    <div class="input-group">
      <input
        type="text"
        :placeholder="`input ${index} aqui`"
        class="input-text"
        v-model="message"
      />
      <button @click="send()" class="btn send">send</button>
    </div>
  </section>
</template>

<script>
import { MessageEventsService } from "../services/events/message.events";
export default {
  props: {
    index: Number,
  },

  data() {
    return {
      message: "",
      messageEventsService: new MessageEventsService(this),
    };
  },

  methods: {
    send() {
      this.messageEventsService.emit("new-message", { message: this.message });
      this.message = "";
    },
  },
};
</script>

<style scoped>
.input-group {
  position: relative;
  width: 100%;
}

.input-text {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 80%;
  border: 1px solid #cecece;
  padding: 0.5rem 1rem;
}

.btn {
  cursor: pointer;
  outline: none;
  padding: 0.1rem 1rem;
  box-shadow: none;
  background: transparent;
  border: none;
}

.send {
  position: absolute;
  right: 9%;
  top: 0.35rem;
  /* top: 50%; */
  /* transform: translate(-50%); */
  font-size: 0.8rem;
  color: rgb(29, 141, 145);
  font-weight: bolder;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  transition: border 0.3s;
}

.send:hover,
.send:focus {
  border: 1px solid turquoise;
}

.send:active {
  transform: translateY(2%);
}
</style>
