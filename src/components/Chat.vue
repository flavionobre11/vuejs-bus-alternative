<template>
  <main>
    <div class="divider">
      <section class="w-100">
        <Messages :messages="messages" />
        <InputMessage />
      </section>

      <section class="w-100">
        <Messages2 :messages="messages" />
        <InputMessage2 />
      </section>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    Messages: () => import("./Messages.vue"),
    Messages2: () => import("./Messages2.vue"),
    InputMessage: () => import("./Input.vue"),
    InputMessage2: () => import("./Input2.vue"),
  },
  data() {
    return {
      messages: ["oiiii", "vamoo", "oh yeaaa"],
    };
  },
};
</script>

<style scoped>
.divider {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.w-100{
  width: 100%;
}
</style>
