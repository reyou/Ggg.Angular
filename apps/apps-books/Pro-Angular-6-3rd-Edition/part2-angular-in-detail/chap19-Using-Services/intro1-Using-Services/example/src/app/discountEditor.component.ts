import { Component, Input, OnInit } from "@angular/core";
import { DiscountService } from "./discount.service";
@Component({
  selector: "paDiscountEditor",
  template: `
    <div class="form-group">
      <label>Discount</label
      ><input
        [(ngModel)]="discounter.discount"
        class="form-control"
        type="number"
      />
    </div>
  `
})
export class PaDiscountEditorComponent implements OnInit {
  @Input("discounter")
  discounter: DiscountService;
  ngOnInit(): void {
    console.log(
      `PaDiscountEditorComponent initialized with discounter: ${this.discounter.discount}.`
    );
  }
}
