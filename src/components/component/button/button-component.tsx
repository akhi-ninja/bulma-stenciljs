import { Component, Prop, h } from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';


@Component({
  tag: 'bl-button',
  styleUrl: 'button-component.scss',
  shadow: true,
})
export class BlButton {
  @Prop({ reflect: true })
  disabled: boolean;

  @Prop()
  type: 'button' | 'reset' | 'submit' = 'button';

  @Prop()
  class: 'is-primary' | 'is-dark' | 'is-light' | 'is-black' | 'is-text' | 'is-ghost' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger' = 'is-primary';

  @Prop()
  shape: 'square' | 'round' = 'square';

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  render() {
     const classMap = this.getCssClassMap();
     return (
       <button type={this.type} class={classMap} disabled={this.disabled}>
        <slot />
      </button>

  );
  }
   private getCssClassMap(): CssClassMap {
    return {
      [this.class]: true,
      [this.shape]: true,
      [this.size]: true
    };
  }
}
