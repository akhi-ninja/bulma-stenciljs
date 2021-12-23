import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './button-component';

describe('button-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<button-component></button-component>',
    });
    expect(root).toEqualHtml(`
      <button-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </button-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<button-component first="Stencil" last="'Don't call me a framework' JS"></button-component>`,
    });
    expect(root).toEqualHtml(`
      <button-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </button-component>
    `);
  });
});
