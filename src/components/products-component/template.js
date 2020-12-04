import { html } from 'lit-html';
import style from './style.component.scss';

export function template () {
	let products = [
      { 
      	title: 'Senti Pulse', 
      	desc: 'A language-adaptive dashboard that provides social’s live trends, news, and topics.',
      	img: 'https://senti.ai/wp-content/uploads/2019/06/artificialintelligencecompany_pulselogo.png'
      },

      { 
      	title: 'Senti Natter', 
      	desc: 'A chat assistant built to handle concerns while your customer chats in his language.',
      	img: 'https://senti.ai/wp-content/uploads/2019/06/artificialintelligencecompany_natterlogo.png'
      },
      { 
      	title: 'Senti Volant', 
      	desc: 'An automated form-processing tool that processes, validates, and accomplishes form at once.',
      	img: 'https://senti.ai/wp-content/uploads/2019/05/artificialintelligencephilippines_artiificialintelligencesolutions_volantlogo.png'
      }
	]

	const clickHandler = {
		  handleEvent(e) { 
		    alert('clicked!');
		  }
	};

	return html `
	  <style>
      ${style}
    </style>

		 <section>
    	<div class="main__products">
    		<h2 class="page__title">Our Products</h2>
	    	<div class="main__content">
	    		${products.map(p => html `
						<div class="products__item">
		    			<img class="product__img" src=${p.img} alt="senti-pulse">
		    			<h2 class="product__title">${p.title}</h2>
		    			<p class="product__desc">${p.desc}</p>
	    			</div>	    			
	    		`)}
	    	</div>
	    	<button @click=${clickHandler} class="page__cta">Learn more about our products</button>
    	</div>
    </section>
	`;
}