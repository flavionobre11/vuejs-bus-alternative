import Vue from 'vue'
import App from './App.vue'
import EventMixin from './mixins/event.mixin'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mixins: [EventMixin]
}).$mount('#app')
