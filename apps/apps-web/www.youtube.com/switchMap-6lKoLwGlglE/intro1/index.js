"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let obs1 = rxjs_1.of(1);
let obs2 = rxjs_1.interval(2000);
obs1
    .pipe(operators_1.switchMap((number) => {
    console.log('Event Started:', number);
    return obs2.pipe(operators_1.map(num2 => num2 * num2));
}), operators_1.tap((logNumber) => {
    console.log('Log Number:', logNumber);
}))
    .subscribe({
    next: value => {
        console.log('value:', value);
    },
    error: err => {
        console.error('err:', err);
    },
    complete: () => {
        console.warn('completed!');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFvQztBQUNwQyw4Q0FBcUQ7QUFFckQsSUFBSSxJQUFJLEdBQUcsU0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLElBQUksSUFBSSxHQUFHLGVBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUxQixJQUFJO0tBQ0QsSUFBSSxDQUNILHFCQUFTLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsRUFDRixlQUFHLENBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUU7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLENBQ0g7S0FDQSxTQUFTLENBQUM7SUFDVCxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFDLENBQUMifQ==