import {
  Component,
  h,
  Element,
  Event,
  EventEmitter,
  Method,
  State
} from '@stencil/core';
import { CssClassMap } from '../../utils/interfaces';

@Component({
  tag: 'bl-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})
export class BlTabs {
  @Element()
  el: HTMLElement;

  @Event({ eventName: 'tabChange' })
  onChange: EventEmitter;

  @State()
  tabs: HTMLBlTabElement[] = [];

  componentWillLoad() {
    this.tabs = Array.from(this.el.querySelectorAll('bl-tab'));
    if (this.tabs.length === 0) {
      throw new Error('[bl-tabs] Must have at least one tab');
    }
  }

  @Method()
  async openTab(index: number) {
    if (index >= this.tabs.length) {
      throw new Error(
        `[bl-tabs] Index ${index} is out of bounds of tabs length`
      );
    }
    if (!this.tabs[index].disabled) {
      this.tabs = this.tabs.map((tab, i) => {
        tab.active = i === index;
        return tab;
      });
      this.onChange.emit({ tabId: index });
    }
  }

  render() {
   // const classMap = this.getCssClassMap();

    return (
      <div class="tabs is-toggle">
        <ul >
        {this.tabs.map((tab: HTMLBlTabElement, index: number) => {
            const tabClassMap: CssClassMap = {
              'tab-button': true,
              'is-active': tab.active
            };

            return (
              <li
                role="tab"
                class={tabClassMap}
                onClick={() => this.openTab(index)}>
                <a>
{tab.label}
      </a>

              </li>
            );
          })}

        </ul>

      </div>

    );
  }

  // private getCssClassMap(): CssClassMap {
  //   return {
  //     'tabs-list': true
  //   };
  // }
}
