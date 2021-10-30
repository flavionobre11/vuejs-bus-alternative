import { Events } from "../../domain/models/events.model";

const MESSAGE_EVENTS = ["new-message", "sended-message"];

export class MessageEventsService extends Events {
  #component;

  constructor(component) {
    super()
    this.#component = component;
  }

  /**
   * 
   * @param { "new-message" | "sended-message"} event 
   * @param { Function } cb 
   * @returns 
   */
  on(event, cb) {
    if (!this.validate(MESSAGE_EVENTS, event)) return;
    this.#component.$root.$on(event, cb);
  }

  /**
   * 
   * @param { "new-message" | "sended-message"} event  
   * @param {*} data 
   * @returns 
   */
  emit(event, data){
    if (!this.validate(MESSAGE_EVENTS, event)) return;
    this.#component.$root.$emit(event, data)
  }
}
