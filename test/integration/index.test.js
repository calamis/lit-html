import 'expect-puppeteer';
import 'chai/register-should';
import { getShadow } from '../utils/get-shadow';

describe('Testing Web Components', () => {
  beforeAll(async () => {
    await page.waitFor(10000);
    await page.goto('http://localhost:8000');
  }, 15000);

  it('should display "hello world" text on page', async () => {
    await page.screenshot({ path: 'screenshot.png' });
    const elHandle = await page.$('#simple');
    const shadow = await getShadow(page, elHandle);
    const el = await shadow.$('#item');
    // const text = await el.evaluate(el => el.innerHTML, el);
    // console.log()
  });
});
