"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJS v6+
const rxjs_1 = require("rxjs");
// Create simple observable that emits three values
const myObservable = rxjs_1.of(1, 2, 3);
// Create observer object
const myObserver = {
    next: (x) => console.log('Observer got a next value: ' + x),
    error: (err) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification')
};
// Execute with the observer object
myObservable.subscribe(myObserver);
// Logs:
// Observer got a next value: 1
// Observer got a next value: 2
// Observer got a next value: 3
// Observer got a complete notification
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFdBQVc7QUFDWCwrQkFBMEI7QUFFMUIsbURBQW1EO0FBQ25ELE1BQU0sWUFBWSxHQUFHLFNBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWpDLHlCQUF5QjtBQUN6QixNQUFNLFVBQVUsR0FBRztJQUNqQixJQUFJLEVBQUUsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLEtBQUssRUFBRSxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxHQUFHLENBQUM7SUFDdEUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUM7Q0FDcEUsQ0FBQztBQUVGLG1DQUFtQztBQUNuQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLFFBQVE7QUFDUiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQix1Q0FBdUMifQ==