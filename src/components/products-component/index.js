import { LitElement } from 'lit-element';
import { customElement } from 'lit-element/lib/decorators';
import { template } from './template';

@customElement('products-component')
class ProductComponent extends LitElement {
	render() {
		return template.bind(this)();
	}
}

export { ProductComponent };