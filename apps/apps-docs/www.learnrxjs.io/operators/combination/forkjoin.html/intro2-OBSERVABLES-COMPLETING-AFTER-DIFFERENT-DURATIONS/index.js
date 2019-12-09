"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJS v6+
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
const myPromise = (val) => new Promise(resolve => setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000));
/*
  when all observables complete, give the last
  emitted value from each as an array
*/
const example = rxjs_1.forkJoin(
//emit 'Hello' immediately
rxjs_1.of('Hello'), 
//emit 'World' after 1 second
rxjs_1.of('World').pipe(operators_1.delay(1000)), 
//emit 0 after 1 second
rxjs_1.interval(1000).pipe(operators_1.take(1)), 
//emit 0...1 in 1 second interval
rxjs_1.interval(1000).pipe(operators_1.take(2)), 
//promise that resolves to 'Promise Resolved' after 5 seconds
myPromise('RESULT'));
//output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
const subscription = example.subscribe({
    next: val => {
        console.log(val);
    }
});
console.log('subscription:', subscription);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFdBQVc7QUFDWCw4Q0FBNkM7QUFDN0MsK0JBQTREO0FBRTVELE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FDN0IsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FDNUQsQ0FBQztBQUVKOzs7RUFHRTtBQUNGLE1BQU0sT0FBTyxHQUFHLGVBQVE7QUFDdEIsMEJBQTBCO0FBQzFCLFNBQUUsQ0FBQyxPQUFPLENBQUM7QUFDWCw2QkFBNkI7QUFDN0IsU0FBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLHVCQUF1QjtBQUN2QixlQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsaUNBQWlDO0FBQ2pDLGVBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1Qiw2REFBNkQ7QUFDN0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUNwQixDQUFDO0FBQ0YsOERBQThEO0FBQzlELE1BQU0sWUFBWSxHQUFpQixPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ25ELElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDIn0=