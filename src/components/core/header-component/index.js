import { LitElement } from 'lit-element';
import { customElement, property } from 'lit-element/lib/decorators';
import { template } from './template';
import { worker, proxy } from '../../../worker';

/**
 * @type {LitElement}
 */
@customElement('header-component')
class Component extends LitElement {
  /** @type {*} */
  @property()
  user = null;

  @property({ type: 'boolean' })
  userInitialized = false;

  constructor () {
    super();

    this._boundUpdateUser = this._updateUser.bind(this);
  }

  render () {
    return template.bind(this)();
  }

  connectedCallback () {
    super.connectedCallback();

    worker.auth.subscribe(proxy(this._boundUpdateUser));
  }

  disconnectedCallback () {
    worker.auth.unsubscribe(proxy(this._boundUpdateUser));
  }

  /**
   *
   * @param {*} user
   */
  _updateUser (user) {
    this.userInitialized = true;
    this.user = user;
  }
}

export { Component };
