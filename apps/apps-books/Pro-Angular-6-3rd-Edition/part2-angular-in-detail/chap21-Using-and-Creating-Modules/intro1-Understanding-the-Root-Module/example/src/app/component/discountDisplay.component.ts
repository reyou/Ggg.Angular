import { Component, Input, OnInit } from '@angular/core';
import { DiscountService } from '../common/discount.service';
@Component({
  selector: 'paDiscountDisplay',
  template: `
    <div class="bg-info text-white p-2">
      The discount is {{ discounter.discount }}
    </div>
  `
})
export class PaDiscountDisplayComponent implements OnInit {
  constructor(private discounter: DiscountService) {}
  ngOnInit(): void {
    console.log(
      `PaDiscountDisplayComponent initialized with discounter: ${this.discounter.discount}.`
    );
  }
}
