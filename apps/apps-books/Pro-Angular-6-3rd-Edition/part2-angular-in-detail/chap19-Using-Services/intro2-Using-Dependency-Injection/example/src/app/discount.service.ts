export class DiscountService {
  private discountValue: number = 10;
  constructor() {
    console.log(
      `DiscountService service initialized with value: ${this.discountValue}.`
    );
  }
  public get discount(): number {
    console.log(`DiscountService.discount() called: ${this.discountValue}`);
    return this.discountValue;
  }
  public set discount(newValue: number) {
    console.log(`DiscountService.discount(newValue) called: ${newValue}`);
    this.discountValue = newValue || 0;
  }
  public applyDiscount(price: number) {
    return Math.max(price - this.discountValue, 5);
  }
}
