export const getShadow = (page, element) =>
  page.evaluateHandle(el => el.shadowRoot, element);
