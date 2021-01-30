import { html, fixture, expect } from '@open-wc/testing';

import { ElectronWebcomponents } from '../src/ElectronWebcomponents.js';
import '../src/electron-webcomponents.js';

describe('ElectronWebcomponents', () => {
  let element: ElectronWebcomponents;
  beforeEach(async () => {
    element = await fixture(html`<electron-webcomponents></electron-webcomponents>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
