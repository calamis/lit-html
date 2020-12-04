import { customElement } from 'lit-element/lib/decorators';
import { LitPage } from '../../utils/lit-page';
import { template } from './template';

/**
 * @type {LitPage}
 */
@customElement('page-about')
class Page extends LitPage {
  render () {
    return template.bind(this)();
  }
}

export { Page };
