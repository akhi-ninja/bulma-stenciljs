import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bl-progress',
  styleUrl: 'progress-component.scss',
  shadow: true,
})
export class BlProgress {
  @Prop()
  clickEvent: any;

  @Prop()
  class: 'is-primary' | 'is-dark' | 'is-light' | 'is-black' | 'is-text' | 'is-ghost' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger' = 'is-primary';

  @Prop()
  max: string;

  @Prop()
  value: string;

  render() {
     let classNames =this.class + " progress";
     return (

       <progress class={classNames} value={this.value} max={this.max}>{ this.value}</progress>

  );
  }

}
