import { html } from 'lit-html';
import style from './style.component.scss';

/**
 * @this {import('./index').Component}
 */
export function template () {
  return html`
    <style>
      ${style}
    </style>

    <footer>
      This is the footer
    </footer>
  `;
}
