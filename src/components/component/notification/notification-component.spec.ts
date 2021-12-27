import { newSpecPage } from '@stencil/core/testing';
import { BlNotification } from './notification-component';

describe('notification-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [BlNotification],
      html: '<notification-component></notification-component>',
    });
    expect(root).toEqualHtml(`
      <notification-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </notification-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [BlNotification],
      html: `<notification-component first="Stencil" last="'Don't call me a framework' JS"></notification-component>`,
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
