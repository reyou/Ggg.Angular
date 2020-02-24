"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// Create an Observable that will publish a value on an interval
const secondsCounter = rxjs_1.interval(1000);
// Subscribe to begin publishing values
secondsCounter.subscribe({
    next: n => {
        console.log(`Sub1: It's been ${n} seconds since subscribing!`);
    }
});
let subscription2 = secondsCounter.subscribe({
    next: n => {
        console.log(`Sub2: It's been ${n} seconds since subscribing!`);
    },
    complete: () => {
        console.log("Sub2 completed.");
    }
});
setTimeout(() => {
    subscription2.unsubscribe();
}, 3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFnQztBQUVoQyxnRUFBZ0U7QUFDaEUsTUFBTSxjQUFjLEdBQUcsZUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLHVDQUF1QztBQUN2QyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxhQUFhLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUMzQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDZCxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDOUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIn0=