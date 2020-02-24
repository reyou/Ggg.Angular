"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// This function runs when subscribe() is called
function sequenceSubscriber(observer) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return {
        unsubscribe() {
            console.log("unsubscribe is called.");
        }
    };
}
// Create a new Observable that will deliver the above sequence
const sequence = new rxjs_1.Observable(sequenceSubscriber);
// execute the Observable and print the result of each notification
sequence.subscribe({
    next(num) {
        console.log(num);
    },
    complete() {
        console.log("Finished sequence");
    }
});
// Logs:
// 1
// 2
// 3
// Finished sequence
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QztBQUU5QyxnREFBZ0Q7QUFDaEQsU0FBUyxrQkFBa0IsQ0FBQyxRQUE0QjtJQUN0RCxtREFBbUQ7SUFDbkQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXBCLDJEQUEyRDtJQUMzRCw2Q0FBNkM7SUFDN0MsT0FBTztRQUNMLFdBQVc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsK0RBQStEO0FBQy9ELE1BQU0sUUFBUSxHQUF1QixJQUFJLGlCQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUV4RSxtRUFBbUU7QUFDbkUsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUNqQixJQUFJLENBQUMsR0FBRztRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILFFBQVE7QUFDUixJQUFJO0FBQ0osSUFBSTtBQUNKLElBQUk7QUFDSixvQkFBb0IifQ==