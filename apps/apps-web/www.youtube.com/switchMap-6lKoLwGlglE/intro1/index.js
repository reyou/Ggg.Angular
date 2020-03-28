"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let obsClick = rxjs_1.of([1, 2, 3]);
let obsInterval = rxjs_1.interval(1000);
obsClick
    .pipe(operators_1.switchMap((number) => {
    console.log('Event Started:', number);
    return obsInterval;
}))
    .subscribe({
    next: value => {
        console.log(value);
    },
    error: err => {
        console.error(err);
    },
    complete: () => {
        console.warn('completed!');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFvQztBQUNwQyw4Q0FBMkM7QUFFM0MsSUFBSSxRQUFRLEdBQUcsU0FBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLElBQUksV0FBVyxHQUFHLGVBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVqQyxRQUFRO0tBQ0wsSUFBSSxDQUNILHFCQUFTLENBQUMsQ0FBQyxNQUFnQixFQUFFLEVBQUU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QyxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FDSDtLQUNBLFNBQVMsQ0FBQztJQUNULElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtRQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFDLENBQUMifQ==