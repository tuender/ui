import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { TdrElementSize, TdrVariantMap } from '../core';

const variantMap: TdrVariantMap[] = [
  {
    attribute: 'tdr-button',
    tdrClasses: ['tdr-button', 'tdr-button--primary'],
  },
  {
    attribute: 'tdr-secondary-button',
    tdrClasses: ['tdr-button', 'tdr-button--secondary'],
  },
  {
    attribute: 'tdr-outline-button',
    tdrClasses: ['tdr-button', 'tdr-button--outline'],
  },
  {
    attribute: 'tdr-ghost-button',
    tdrClasses: ['tdr-button', 'tdr-button--ghost'],
  },
  {
    attribute: 'tdr-link-button',
    tdrClasses: ['tdr-button', 'tdr-button--link'],
  },
];

@Component({
  selector:
    'button[tdr-button], button[tdr-secondary-button], button[tdr-outline-button], button[tdr-ghost-button], button[tdr-link-button]',
  standalone: true,
  exportAs: 'tdrButton',
  templateUrl: './tdr-button.html',
  styleUrl: './tdr-button.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
    '[attr.disabled]': 'disabled()',
    '[attr.aria-disabled]': 'ariaDisabled()',
  },
})
export class TdrButton {
  private readonly _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  protected classes = computed(() => `tdr-button-size--${this.size()}`);

  public size = input<TdrElementSize>('base');

  public disabled = input(false, { transform: booleanAttribute });
  public ariaDisabled = input(false, {
    transform: booleanAttribute,
    alias: 'aria-disabled',
  });

  public constructor() {
    const element = this._elementRef.nativeElement;
    for (const variant of variantMap) {
      if (element.hasAttribute(variant.attribute)) {
        element.classList.add(...variant.tdrClasses);
      }
    }
  }
}
