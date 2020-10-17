import { html } from 'lit-html';
import style from './style.component.scss';

/**
 * @this {import('./index').Component}
 */
export function template () {
  const { user, userInitialized } = this;

  return html`
    <style>
      ${style}
    </style>

    <header>
      <h1 class="title">
        <a href="/">Webapp</a>
      </h1>

      <div class="spacer"></div>

      <nav>
        <ul class="nav-list">
          <!-- <li class="nav-item">
            <a href="/blog">
              Blog
            </a>
          </li> -->

          ${userInitialized ? html`
            ${user
              ? html`
                <li class="nav-item">
                  <a href="/create/blog">
                    Create
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/logout">
                    Logout
                  </a>
                </li>
              `
              : html`
                <li class="nav-item">
                  <a href="/login">
                    Login
                  </a>
                </li>
              `}
          ` : ''}
        </ul>
      </nav>
    </header>
  `;
}
