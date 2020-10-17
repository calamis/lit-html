import { customElement } from 'lit-element';
import { LitPage } from '../../utils/lit-page';
import { template } from './template';

@customElement('page-404')
class Page extends LitPage {
  render () {
    return template.bind(this)();
  }
}

export { Page };
