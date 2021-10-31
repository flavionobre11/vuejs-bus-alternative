import { Events } from "../../domain/models/events.model";

const MESSAGE_EVENTS = ["new-message", "sended-message"];

export class MessageEventsService extends Events {
  #component;
  #id = `${Math.floor(Math.random() * 1e5).toString(16)}`;

  constructor(component) {
    super();
    this.#component = component;
    this.off();
  }

  /**
   *
   * @param { "new-message" | "sended-message"} event
   * @param { Function } cb
   * @returns
   */
  on(event, cb) {
    if (!this.validate(MESSAGE_EVENTS, event)) return;
    this.#component.$root.registerListener(`${event}-${this.#id}`, event, cb);
  }

  /**
   *
   * @param { "new-message" | "sended-message"} event
   * @param {*} data
   * @returns
   */
  emit(event, data) {
    if (!this.validate(MESSAGE_EVENTS, event)) return;
    this.#component.$root.emit(event, data);
  }

  /**
   * Registrar hook quando o componente for destruido
   */
  off() {
    this.#component.$options.beforeDestroy.push(() => {
      MESSAGE_EVENTS.forEach((event) =>
        this.#component.$root.removeListener(`${event}-${this.#id}`)
      );
    });
  }
}
