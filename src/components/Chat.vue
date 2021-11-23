<template>
  <div class="chat-content">
    <header class="chat-content-header">
      <NotificationInfo />
    </header>

    <main>
      <div class="divider">
        <section v-for="(items, index) in INSTANCES" :key="index" class="items">
          <h2 class="chat-content-title">Chat {{ index + 1 }}</h2>
          <Messages :messages="messages" :index="index + 1" />
          <InputMessage :index="index + 1" />
        </section>
      </div>
    </main>

    <footer class="chat-content-footer">
      <p>EventBus Alternative (VueJs)</p>
      <div class="chat-content-footer-info">
        <a
          href="https://github.com/flavionobre11/vuejs-bus-alternative"
          target="_blank"
          >Git Hub</a
        >
        <span>-</span>
        <a
          href="https://github.com/flavionobre11/vuejs-bus-alternative"
          target="_blank"
          >Medium</a
        >
        <span>-</span>
        <p>Flávio Nobre</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
    Messages: () => import("./Messages.vue"),
    InputMessage: () => import("./Input.vue"),
    NotificationInfo: () => import("./Notification.vue"),
  },
  data() {
    return {
      messages: [],
      INSTANCES: 4,
    };
  },
};
</script>

<style scoped>
.chat-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 100vh;
}

.chat-content-header {
  margin-bottom: 2rem;
}

.chat-content-title {
  text-align: left;
  margin-bottom: 1.5rem;
  font-weight: bolder;
}

.divider {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.items {
  margin: 0 1rem 1rem 1rem;
  padding: 2rem 1rem 5rem 1rem;
  border-radius: 0.5rem;
  background-color: #d8c4a4;
  color: #3f3f3f;
  width: 15rem;
  height: 100%;
}

.chat-content-footer {
  position: absolute;
  bottom: 2rem;
  right: 50%;
  transform: translateX(50%);
}

.chat-content-footer-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  margin-top: 0.6rem;
}

.chat-content-footer-info > a {
  color: #89b1f1;
  text-decoration: none;
}

.chat-content-footer-info > span {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .items {
    width: 90%;
  }

  .chat-content {
    padding: 5rem 0;
  }

  .chat-content-footer {
    position: inherit;
    padding: 3rem 0;
    transform: translateX(0);
  }
}
</style>
