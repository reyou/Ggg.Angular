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
sequence.subscribe({
    next(num) {
        console.log(num);
    },
    complete() {
        console.log("Finished sequence");
    }
});
// Logs:
// (at 1 second): 1
// (at 2 seconds): 2
// (at 3 seconds): 3
// (at 3 seconds): Finished sequence
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QztBQUU5QyxTQUFTLGtCQUFrQixDQUFDLFFBQTRCO0lBQ3RELE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixJQUFJLFNBQWlCLENBQUM7SUFFdEIsMkRBQTJEO0lBQzNELG9EQUFvRDtJQUNwRCxTQUFTLFVBQVUsQ0FBQyxHQUFhLEVBQUUsR0FBVztRQUM1QyxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDckI7aUJBQU07Z0JBQ0wsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFbkIseURBQXlEO0lBQ3pELE9BQU87UUFDTCxXQUFXO1lBQ1QsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELCtEQUErRDtBQUMvRCxNQUFNLFFBQVEsR0FBRyxJQUFJLGlCQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVwRCxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ2pCLElBQUksQ0FBQyxHQUFHO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsUUFBUTtBQUNSLG1CQUFtQjtBQUNuQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9DQUFvQyJ9