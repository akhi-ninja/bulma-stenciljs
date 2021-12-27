import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bl-notification',
  styleUrl: 'notification-component.scss',
  shadow: true,
})
export class BlNotification {
  @Prop()
  clickEvent: any;

  @Prop()
  class: 'is-primary' | 'is-dark' | 'is-light' | 'is-black' | 'is-text' | 'is-ghost' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger' = 'is-primary';

  @Prop()
  shape: 'square' | 'round' = 'square';

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  render() {
     let classNames =this.class + " notification";
     return (
   
      <div class={classNames} >
        <button class="delete"></button>
        <slot />
      </div>

  );
  }

}
