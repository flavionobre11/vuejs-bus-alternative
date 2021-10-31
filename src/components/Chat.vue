<template>
  <div>
    <header>
      <NotificationInfo />
    </header>

    <main>
      <div class="divider">
        <section v-for="(items, index) in INSTANCES" :key="index" class="items">
          <Messages :messages="messages" :index="index + 1" />
          <InputMessage :index="index + 1" />
        </section>

        <!-- <section class="items">
          <hr />
          <br /><br />
          <Messages2 :messages="messages" :index="1" />
          <InputMessage2 :index="1" />
        </section> -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  components: {
    Messages: () => import("./Messages.vue"),
    InputMessage: () => import("./Input.vue"),
    // Messages2: () => import("./Messages2.vue"),
    // InputMessage2: () => import("./Input2.vue"),
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
.divider {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.items {
  width: 50%;
  padding: 3rem 0;
}

@media (max-width: 768px) {
  .items {
    width: 100%;
  }
}
</style>
