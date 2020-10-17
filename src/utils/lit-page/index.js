import { LitElement } from 'lit-element';

export class LitPage extends LitElement {
  static get properties () {
    return {
      path: { type: String },
      hash: { type: String },
      query: { type: String },
      queryObject: { type: Object },
      paramObject: { type: Object }
    };
  }
}
