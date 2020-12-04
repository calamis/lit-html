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

    <section>
    	<div class="main__hero">
    		<div class="hero__content">
    			<h2 class="page__title">Your Leader in AI Innovation</h2>
	    		<p class="page__desc">Senti is the pioneering artificial intelligence company in the Philippines.</p>
	    		<a href="#" class="page__cta">Get to know senti</a>
    		</div>
    		<div class="hero__image">
    			<img src="https://senti.ai/wp-content/uploads/2019/06/artificialintelligencecompany_banner.png" alt="senti-hero-image">
    		</div>
    	</div>
    </section>

    <div class="text__hero">
	    <h3 class="page__title">We make artificial intelligence possible and attainable for everyone</h3>
    </div>

    <section>
    	<div class="main__content">
    		<div class="content__img">
    			<img class="page__img" src="https://senti.ai/wp-content/uploads/2019/04/sentiai_aboutus-1.png" alt="senti-hero-image">
    		</div>
    		<div class="content__copy">
	    		<p class="page__desc">Senti AI is the pioneering artificial intelligence company in the Philippines. Established in 2015, and led by pioneering researchers and half of the country’s Google Developer Experts, the company has come to successfully augment organizations’ current environment with AI.</p>
	    		<p class="page__desc">Thus having found success in how we approach every AI project using our proven method, we will continue to innovate our methods until AI technologies are accessible to organizations no matter the size.</p>
    		</div>
    	</div>
    </section>


    <products-component></products-component>


    <section>
    	<div class="main__contactForm">
    		<h2 class="page__title">Get in touch</h2>
    		<div class="main__content">
    			<form action="#" class="contactForm">
    				<div class="form__wrapper">
    					<label htmlFor="name" class="form__label">Name</label>
    					<input type="text" class="form__input" placeholder="Enter your name">
    				</div>
    				<div class="form__wrapper">
    					<label htmlFor="email" class="form__label">Email Address</label>
    					<input type="text" class="form__input" placeholder="Enter your email">
    				</div>
    				<div class="form__wrapper">
    					<label htmlFor="phone" class="form__label">Mobile Number*</label>
    					<input type="text" class="form__input" placeholder="+639*********">
    				</div>
    				<div class="form__wrapper">
    					<label htmlFor="how" class="form__label">How can we help you?</label>
    					<select name="service" id="">
    						<option value="1">I have a question about your products</option>
    						<option value="2">I'd like to schedule a demo</option>
    						<option value="3">Others</option>
    					</select>
    				</div>
                    <div class="form__wrapper">
                        <label htmlFor="message" class="form__label">Message</label>
                        <textarea type="text" name="message" class="form__input" placeholder="Your message here..."></textarea>
                    </div>
                    <input type="checkbox" name="newsletter">
                    <label for="vehicle1">Check to receive once a month updates, tips, and studies via email</label><br>
    				<button type="submit" class="form__btn">Send</button>
    			</form>
    		</div>
    	</div>
    </section>

  `;
}
