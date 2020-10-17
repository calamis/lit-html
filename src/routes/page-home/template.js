import { html } from 'lit-html';
import style from './style.component.scss';

/**
 * @this {import('./index').Page & LitPage}
 */
export function template () {
  return html`
    <style>
      ${style}
    </style>

    Hello World
  `;
}
