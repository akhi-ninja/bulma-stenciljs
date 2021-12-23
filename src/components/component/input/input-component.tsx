import { Component, Prop, h } from '@stencil/core';
// import { CssClassMap } from '../../utils/interfaces';


@Component({
  tag: 'bl-input',
  styleUrl: 'input-component.scss',
  shadow: true,
})
export class BlInput {
  @Prop({ reflect: true })
  disabled: boolean;

  @Prop()
  type: 'email' | 'text' | 'password' = 'text';

  @Prop()
  class: string;

  @Prop()
  shape: 'square' | 'round' = 'square';

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';
  @Prop()
  placeholder: string;

  render() {
    let classNames =this.class + " input";

     return (
       <input type={this.type} class={classNames}  placeholder={this.placeholder} disabled={this.disabled} />

  );
  }
  //  private getCssClassMap(): CssClassMap {
  //   return {
  //     [this.class]: true,
  //     [this.shape]: true,
  //     [this.size]: true
  //   };
  // }
}
