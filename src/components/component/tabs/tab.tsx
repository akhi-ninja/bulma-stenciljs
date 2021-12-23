import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bl-tab',
  shadow: true
})
export class Tab {
  @Prop() label: string;

  @Prop() active: boolean;

  @Prop({ reflect: true }) disabled: boolean;
}
