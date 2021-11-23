<template>
  <section>
    <div class="input-group">
      <input
        type="text"
        :placeholder="`input ${index} aqui`"
        class="input-text"
        v-model="message"
        @keydown.enter="send()"
      />
      <button @click="send()" class="btn send">→</button>
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
      if(!this.message) return;
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
  width: 85%;
  border: 1px solid #cecece;
  padding: 0.5rem 1rem;
  border-radius: .5rem;
  outline: none;
  transition: .3s;
  font-size: .7rem;
}

.input-text:focus {
  border: 1px solid #88C8CB;
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
  right: 6%;
  top: .15rem;
  padding: 0;
  /* top: 50%; */
  /* transform: translate(-50%); */
  /* font-size: 2rem; */
  transform: scale(2.2);
  color: rgb(29, 141, 145);
  border-radius: 0.5rem;
  transition: 0.1s;
}

.send:hover,
.send:focus {
  font-weight: bolder;
  font-size: 1rem;
  line-height: .7rem;
}

.send:active {
  transform: translateY(2%);
}
</style>
