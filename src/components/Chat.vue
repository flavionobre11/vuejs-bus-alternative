<template>
  <main>
    <div class="divider">
      <section class="items">
        <Messages :messages="messages" :index="1" />
        <InputMessage :index="1" />
      </section>
      <section class="items">
        <Messages :messages="messages" :index="2" />
        <InputMessage :index="2" />
      </section>
      <section class="items">
        <Messages :messages="messages" :index="3" />
        <InputMessage :index="3" />
      </section>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    Messages: () => import("./Messages.vue"),
    InputMessage: () => import("./Input.vue"),
  },
  data() {
    return {
      messages: [],
      INSTANCES: 3,
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
  width: 100%;
  padding: 3rem 0;
}
</style>
