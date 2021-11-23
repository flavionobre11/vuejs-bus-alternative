import { Events } from "../../domain/models/events.model";

const MESSAGE_EVENTS = ["new-message", "sended-message"];

export class MessageEventsService extends Events {
  /**
   * Instancia da classe MessageEventsService passando o componente
   * @param {Vue} component componente vue
   */
  constructor(component) {
    super();
    if (!component)
      throw new Error(
        `[${MessageEventsService.name}]\tO componente deve ser passado no construtor`
      );
    this.component = component;
    this.off();
  }

  /**
   * Metodo para registrar um listener para o evento
   * @param { "new-message" | "sended-message"} event
   * @param { Function } cb
   * @returns
   */
  on(event, cb) {
    if (!this.validate(MESSAGE_EVENTS, event)) return;
    this.component.$root.registerListener(`${event}-${this.id}`, event, cb);
  }

  /**
   * Metodo para emitir dados sob um evento que possui listeners registrados
   * @param { "new-message" | "sended-message"} event
   * @param {*} data
   * @returns
   */
  emit(event, data) {
    if (!this.validate(MESSAGE_EVENTS, event)) return;
    this.component.$root.emit(event, data);
  }

  /**
   * Metodo para remover listener de um evento
   * @param {string} event evento para remover
   */
  removeListener(event) {
    this.component.$root.removeListener(`${event}-${this.id}`);
  }

  /**
   * Registrar hook quando o componente for destruido
   */
  off() {
    this.component.$once("hook:beforeDestroy", () =>
      MESSAGE_EVENTS.forEach((event) => this.removeListener(event))
    );
  }
}
