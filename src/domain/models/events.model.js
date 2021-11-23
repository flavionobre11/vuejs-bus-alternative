/**
 * @class abstract class Events
 */
export class Events {
  

  /**
   * Componente atual
   */
  component;

  /**
   * Identificador unico para o componente
   */
  id = `${Math.floor(Math.random() * 1e5).toString(16)}`;

  
  constructor() {
    if (this.constructor === Events) {
      throw new Error(`${Events.name} não pode ser instanciada`);
    }
  }

  /**
   * Adicionar listener a um evento
   * @abstract
   * @param { string } event
   * @param { Function } cb
   */
  on(event, cb) {
    throw new Error("Metodo não implementado");
  }

  /**
   * Emitir um evento
   * @abstract
   * @param { string } event
   * @param {*} data
   */
  emit(event, data) {
    throw new Error("Metodo não implementado");
  }

  /**
   * Metodo para remover listener de um evento
   * @param {string} event evento para remover
   */
  removeListener(event) {
    throw new Error("Metodo não implementado");
  }

  /**
   * Remove listener do evento
   * @abstract
   * @param { string } event
   */
  off(event) {
    throw new Error("Metodo não implementado");
  }

  /**
   * Valida se um evento pertence aos eventos cadastrados
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
