import { LitElement } from 'lit-element';
import { customElement } from 'lit-element/lib/decorators';
import { template } from './template';

/**
 * @type {LitElement}
 */
@customElement('footer-component')
class Component extends LitElement {
  render () {
    return template.bind(this)();
  }
}

export { Component };
