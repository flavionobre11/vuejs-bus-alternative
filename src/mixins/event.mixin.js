export default {
  methods: {
    /**
     * @param { "send-message" | "new-message" } event
     * @param { Function } cb
     */
    listen(event, cb) {
      return this.$on(event, cb);
    },

    /**
     * 
     * @param {string} event 
     * @param {*} data 
     */
    emit(event, data){
      this.$emit(event, data)
    }
  },

  beforeDestroy(){
    console.log('destryudio')
  }
};
