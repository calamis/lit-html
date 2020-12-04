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
    	<div class="main__container">
      	<div class="page__content">
      		<img src="https://senti.ai/wp-content/uploads/2019/04/senti-footer-logo.png" alt="senti">
      		<ul class="main__nav __icons">
      			<li class="nav__item"><a href="#" class="nav__link"><i class="icon icon-envelope" aria-hidden="true"></i>hello@senti.com.ph</a></li>
      			<li class="nav__item"><a href="#" class="nav__link">+63.2.7719.1565</a></li>
      			<li class="nav__item"><a href="#" class="nav__link">Unit 1114, Herrera Tower, VA Rufino cor Valero, Makati City, Philippines</a></li>
      			<li class="nav__item"><a href="#" class="nav__link">Mapletree Business City, 20 Pasir Panjang Road, #03-22/24, Singapore 117439</a></li>
      		</ul>
      	</div>
      	<div class="page__content">
      		<h2 class="page__title">Site links</h2>
      		<ul class="main__nav">
      			<li class="nav__item"><a href="#" class="nav__link">Careers</a></li>
      			<li class="nav__item"><a href="#" class="nav__link">Partners</a></li>
      			<li class="nav__item"><a href="#" class="nav__link">Term of use</a></li>
      			<li class="nav__item"><a href="#" class="nav__link">Privacy Policy</a></li>
      		</ul>
      	</div>
      </div>
    </footer>
  `;
}
