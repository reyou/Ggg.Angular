import { Pipe } from "@angular/core";
/* Pipes are classes to which the @Pipe decorator has been applied and that implement a method called
transform. The @Pipe decorator defines two properties, which are used to configure pipes. */
@Pipe({
  name: "addTax"
})
export class PaAddTaxPipe {
  defaultRate: number = 10;
  transform(value: any, rate?: any): number {
    let valueNumber = Number.parseFloat(value);
    let rateNumber =
      rate == undefined ? this.defaultRate : Number.parseInt(rate);
    return valueNumber + valueNumber * (rateNumber / 100);
  }
}
