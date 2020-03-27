"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let button = document.getElementById('button');
let obsClick = rxjs_1.fromEvent(button, 'click');
let obsInterval = rxjs_1.interval(1000);
obsClick
    .pipe(operators_1.switchMap((event) => {
    console.log('Event Started:', event);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmlld3MvaG9tZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUEyQztBQUMzQyw4Q0FBMkM7QUFFM0MsSUFBSSxNQUFNLEdBQTZCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFekUsSUFBSSxRQUFRLEdBQUcsZ0JBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUMsSUFBSSxXQUFXLEdBQUcsZUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWpDLFFBQVE7S0FDTCxJQUFJLENBQ0gscUJBQVMsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQ0g7S0FDQSxTQUFTLENBQUM7SUFDVCxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQyxDQUFDIn0=