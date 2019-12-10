import {
  Directive,
  Input,
  SimpleChange,
  KeyValueDiffer,
  KeyValueDiffers,
  ChangeDetectorRef
} from '@angular/core';
import { DiscountService } from './discount.service';
// tslint:disable-next-line: no-conflicting-lifecycle
@Directive({ selector: 'td[pa-price]', exportAs: 'discount' })
export class PaDiscountAmountDirective {
  /* A differ that tracks changes made to an object over time. */
  private differ: KeyValueDiffer<any, any>;
  constructor(
    private keyValueDiffers: KeyValueDiffers,
    private changeDetector: ChangeDetectorRef,
    private discount: DiscountService
  ) {}
  // tslint:disable-next-line: no-input-rename
  @Input('pa-price') originalPrice: number;
  discountAmount: number;
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.discount).create();
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    if (changes['originalPrice'] != null) {
      this.updateValue();
    }
  }
  ngDoCheck() {
    if (this.differ.diff(this.discount) != null) {
      this.updateValue();
    }
  }
  private updateValue() {
    this.discountAmount =
      this.originalPrice - this.discount.applyDiscount(this.originalPrice);
  }
}
