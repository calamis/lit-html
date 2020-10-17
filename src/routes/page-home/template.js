import { html } from 'lit-html';
import style from './style.component.scss';
import '../../components/blog/blog-list-loader';
import '../../components/blog/blog-list-component';

/**
 * @this {import('./index').Page & LitPage}
 */
export function template () {
  const { queryObject } = this;
  const { nextId, prevId } = queryObject;

  return html`
    <style>
      ${style}
    </style>

    <blog-list-loader .nextId="${nextId}" .prevId="${prevId}">
      <blog-list-component></blog-list-component>
    </blog-list-loader>
  `;
}
