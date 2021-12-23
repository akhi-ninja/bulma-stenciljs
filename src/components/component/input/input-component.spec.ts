import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './input-component';

describe('input-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<input-component></input-component>',
    });
    expect(root).toEqualHtml(`
      <input-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </input-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<input-component first="Stencil" last="'Don't call me a framework' JS"></input-component>`,
    });
    expect(root).toEqualHtml(`
      <input-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </input-component>
    `);
  });
});
