"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function sequenceSubscriber(observer) {
    const seq = [1, 2, 3];
    let timeoutId;
    // Will run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
    function doSequence(arr, idx) {
        timeoutId = setTimeout(() => {
            observer.next(arr[idx]);
            if (idx === arr.length - 1) {
                observer.complete();
            }
            else {
                doSequence(arr, ++idx);
            }
        }, 1000);
    }
    doSequence(seq, 0);
    // Unsubscribe should clear the timeout to stop execution
    return {
        unsubscribe() {
            clearTimeout(timeoutId);
        }
    };
}
// Create a new Observable that will deliver the above sequence
const sequence = new rxjs_1.Observable(sequenceSubscriber);
// Subscribe starts the clock, and will emit after 1 second
sequence.subscribe({
    next(num) {
        console.log("1st subscribe: " + num);
    },
    complete() {
        console.log("1st sequence finished.");
    }
});
// After 1/2 second, subscribe again.
setTimeout(() => {
    sequence.subscribe({
        next(num) {
            console.log("2nd subscribe: " + num);
        },
        complete() {
            console.log("2nd sequence finished.");
        }
    });
}, 500);
// Logs:
// (at 1 second): 1st subscribe: 1
// (at 1.5 seconds): 2nd subscribe: 1
// (at 2 seconds): 1st subscribe: 2
// (at 2.5 seconds): 2nd subscribe: 2
// (at 3 seconds): 1st subscribe: 3
// (at 3 seconds): 1st sequence finished
// (at 3.5 seconds): 2nd subscribe: 3
// (at 3.5 seconds): 2nd sequence finished
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguVHdvU3Vic2NyaXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LlR3b1N1YnNjcmlwdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEM7QUFFOUMsU0FBUyxrQkFBa0IsQ0FBQyxRQUE0QjtJQUN0RCxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEIsSUFBSSxTQUFpQixDQUFDO0lBRXRCLDJEQUEyRDtJQUMzRCxvREFBb0Q7SUFDcEQsU0FBUyxVQUFVLENBQUMsR0FBYSxFQUFFLEdBQVc7UUFDNUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDMUIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNMLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRW5CLHlEQUF5RDtJQUN6RCxPQUFPO1FBQ0wsV0FBVztZQUNULFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRCwrREFBK0Q7QUFDL0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFcEQsMkRBQTJEO0FBQzNELFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUc7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFDLENBQUM7QUFFSCxxQ0FBcUM7QUFDckMsVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNkLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxRQUFRO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFUixRQUFRO0FBQ1Isa0NBQWtDO0FBQ2xDLHFDQUFxQztBQUNyQyxtQ0FBbUM7QUFDbkMscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQyx3Q0FBd0M7QUFDeEMscUNBQXFDO0FBQ3JDLDBDQUEwQyJ9