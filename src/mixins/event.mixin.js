export default {
  data() {
    return {
      /**
       * @type { { id: string, eventName: string }[] }
       */
      events: [],
    };
  },

  methods: {
    /**
     * Register event on event list
     * @param { string } id
     * @param { string } event
     * @param { Function } event
     */
    registerListener(id, event, cb) {
      this.events.push({
        id,
        eventName: event,
      });
      this.$on(id, cb);
    },

    /**
     * Dispatch event
     * @param {string} id
     */
    emit(event, data) {
      const eventsToCall = this.events.filter(
        (eventObj) => eventObj.eventName === event
      );
      if (!eventsToCall.length)
        throw new Error(
          `[${this.$options.name}]\tNão foram encontrados listeners para o evento: ${event}`
        );
      eventsToCall.forEach((event) => this.$emit(event.id, data));
    },

    /**
     * Remove listener of event list
     * @param {string} id
     */
    removeListener(id) {
      this.$off(id);
      this.events = this.events.filter((event) => event.id !== id);
    },
  },
};
