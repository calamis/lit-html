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
      <div class="main__container">
      <a href="/" class="logo">
        <h1 class="title">
            <img src="https://senti.ai/wp-content/uploads/2019/04/vertical-lightbg-senti-logo.png" alt="senti">
        </h1>
      </a>
        <div class="spacer"></div>

        <nav>
          <ul class="nav-list">
           <li class="nav-item">
              <a href="/">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a href="/About">
                About
              </a>
            </li>

            <li class="nav-item">
              <a href="/">
                Contact Us
              </a>
            </li>

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
      </div>  
    </header>
  `;
}
