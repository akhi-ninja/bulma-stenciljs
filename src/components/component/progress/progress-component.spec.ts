import { newSpecPage } from '@stencil/core/testing';
import { BlProgress } from './progress-component';

describe('notification-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [BlProgress],
      html: '<progress-component></progress-component>',
    });
    expect(root).toEqualHtml(`
      <progress-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </progress-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [BlProgress],
      html: `<progress-component first="Stencil" last="'Don't call me a framework' JS"></progress-component>`,
    });
    expect(root).toEqualHtml(`
      <notification-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </notification-component>
    `);
  });
});
