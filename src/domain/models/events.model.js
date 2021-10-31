/**
 * @class abstract class Events
 */
export class Events {
  constructor() {
    if (this.constructor === Events) {
      throw new Error(`${Events.name} não pode ser instanciada`);
    }
  }

  /**
   * Listen event
   * @abstract
   * @param { string } event
   * @param { Function } cb
   */
  on(event, cb) {
    throw new Error("Metodo não implementado");
  }

  /**
   * Emit event
   * @abstract
   * @param { string } event
   * @param {*} data
   */
  emit(event, data) {
    throw new Error("Metodo não implementado");
  }

  /**
   * Remove listener on event
   * @abstract
   * @param { string } event
   */
  off(event) {
    throw new Error("Metodo não implementado");
  }

  /**
   *
   * @param { string[] } allowedEvents
   * @param { string } event
   */
  validate(allowedEvents, event) {
    const isValid = allowedEvents.includes(event);
    if (!isValid)
      throw new Error(
        `[${this.constructor.name}]\tEvento não registrado: ${event}`
      );
    return isValid;
  }
}
