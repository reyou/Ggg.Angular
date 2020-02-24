"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function multicastSequenceSubscriber() {
    const seq = [1, 2, 3];
    // Keep track of each observer (one for every active subscription)
    const observers = [];
    // Still a single timeoutId because there will only ever be one
    // set of values being generated, multicasted to each subscriber
    let timeoutId;
    // Return the subscriber function (runs when subscribe()
    // function is invoked)
    return (observer) => {
        observers.push(observer);
        // When this is the first subscription, start the sequence
        if (observers.length === 1) {
            timeoutId = doSequence({
                next(val) {
                    // Iterate through observers and notify all subscriptions
                    observers.forEach(obs => obs.next(val));
                },
                complete() {
                    // Notify all complete callbacks
                    observers.slice(0).forEach(obs => obs.complete());
                }
            }, seq, 0);
        }
        return {
            unsubscribe() {
                // Remove from the observers array so it's no longer notified
                observers.splice(observers.indexOf(observer), 1);
                // If there's no more listeners, do cleanup
                if (observers.length === 0) {
                    clearTimeout(timeoutId);
                }
            }
        };
    };
}
// Run through an array of numbers, emitting one value
// per second until it gets to the end of the array.
function doSequence(observer, arr, idx) {
    return setTimeout(() => {
        observer.next(arr[idx]);
        if (idx === arr.length - 1) {
            observer.complete();
        }
        else {
            doSequence(observer, arr, ++idx);
        }
    }, 1000);
}
// Create a new Observable that will deliver the above sequence
const multicastSequence = new rxjs_1.Observable(multicastSequenceSubscriber());
// Subscribe starts the clock, and begins to emit after 1 second
multicastSequence.subscribe({
    next(num) {
        console.log("1st subscribe: " + num);
    },
    complete() {
        console.log("1st sequence finished.");
    }
});
// After 1 1/2 seconds, subscribe again (should "miss" the first value).
setTimeout(() => {
    multicastSequence.subscribe({
        next(num) {
            console.log("2nd subscribe: " + num);
        },
        complete() {
            console.log("2nd sequence finished.");
        }
    });
}, 1500);
// Logs:
// (at 1 second): 1st subscribe: 1
// (at 2 seconds): 1st subscribe: 2
// (at 2 seconds): 2nd subscribe: 2
// (at 3 seconds): 1st subscribe: 3
// (at 3 seconds): 1st sequence finished
// (at 3 seconds): 2nd subscribe: 3
// (at 3 seconds): 2nd sequence finished
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguTXVsdGljYXN0U3Vic2NyaWJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4Lk11bHRpY2FzdFN1YnNjcmliZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEM7QUFFOUMsU0FBUywyQkFBMkI7SUFDbEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLGtFQUFrRTtJQUNsRSxNQUFNLFNBQVMsR0FBeUIsRUFBRSxDQUFDO0lBQzNDLCtEQUErRDtJQUMvRCxnRUFBZ0U7SUFDaEUsSUFBSSxTQUFpQixDQUFDO0lBRXRCLHdEQUF3RDtJQUN4RCx1QkFBdUI7SUFDdkIsT0FBTyxDQUFDLFFBQTRCLEVBQUUsRUFBRTtRQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLDBEQUEwRDtRQUMxRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLFNBQVMsR0FBRyxVQUFVLENBQ3BCO2dCQUNFLElBQUksQ0FBQyxHQUFHO29CQUNOLHlEQUF5RDtvQkFDekQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFDRCxRQUFRO29CQUNOLGdDQUFnQztvQkFDaEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDcEQsQ0FBQzthQUNvQixFQUN2QixHQUFHLEVBQ0gsQ0FBQyxDQUNGLENBQUM7U0FDSDtRQUVELE9BQU87WUFDTCxXQUFXO2dCQUNULDZEQUE2RDtnQkFDN0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCwyQ0FBMkM7Z0JBQzNDLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQzFCLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDekI7WUFDSCxDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELFNBQVMsVUFBVSxDQUFDLFFBQTRCLEVBQUUsR0FBYSxFQUFFLEdBQVc7SUFDMUUsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVELCtEQUErRDtBQUMvRCxNQUFNLGlCQUFpQixHQUFHLElBQUksaUJBQVUsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLENBQUM7QUFFeEUsZ0VBQWdFO0FBQ2hFLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztJQUMxQixJQUFJLENBQUMsR0FBRztRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILHdFQUF3RTtBQUN4RSxVQUFVLENBQUMsR0FBRyxFQUFFO0lBQ2QsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsUUFBUTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRVQsUUFBUTtBQUNSLGtDQUFrQztBQUNsQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyx3Q0FBd0M7QUFDeEMsbUNBQW1DO0FBQ25DLHdDQUF3QyJ9