import Vue from "vue";
import App from "./App.vue";
import eventMixin from "./mixins/event.mixin";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  mixins: [eventMixin],
  name: "ROOT",
}).$mount("#app");
