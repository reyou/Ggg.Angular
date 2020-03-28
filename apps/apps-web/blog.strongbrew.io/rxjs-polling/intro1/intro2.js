"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://blog.strongbrew.io/rxjs-polling/
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const axios_1 = require("axios");
// https://itnext.io/working-with-axios-and-rxjs-to-make-simple-ajax-service-module-6fda9ecdaf9f
const bitcoin$ = rxjs_1.from(axios_1.default.get('https://blockchain.info/ticker'));
let manualRefresh = new rxjs_1.Subject();
function refreshDataClick() {
    console.log({
        item: 'refreshDataClick'
    });
    manualRefresh.next('');
}
manualRefresh.pipe(operators_1.concatMap((number, index) => {
    console.log({
        item: 'concatMap',
        number,
        index
    });
    return bitcoin$;
}));
const trigger$ = rxjs_1.timer(0, 10000);
let polledBitcoin$ = trigger$.pipe(operators_1.concatMap(_ => bitcoin$), operators_1.map((response) => {
    console.log({
        item: 'Data Fetched'
    });
    return response.data;
}));
polledBitcoin$.subscribe({
    next: (data) => {
        console.log(data.USD);
    }
});
setInterval(() => refreshDataClick(), 3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTJDO0FBQzNDLCtCQVNjO0FBQ2QsOENBT3dCO0FBQ3hCLGlDQUE2QztBQUU3QyxnR0FBZ0c7QUFDaEcsTUFBTSxRQUFRLEdBQW1DLFdBQUksQ0FDbkQsZUFBSyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUM1QyxDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztBQUNsQyxTQUFTLGdCQUFnQjtJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ1YsSUFBSSxFQUFFLGtCQUFrQjtLQUN6QixDQUFDLENBQUM7SUFDSCxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFDRCxhQUFhLENBQUMsSUFBSSxDQUNoQixxQkFBUyxDQUFDLENBQUMsTUFBVyxFQUFFLEtBQWEsRUFBRSxFQUFFO0lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNO1FBQ04sS0FBSztLQUNOLENBQUMsQ0FBQztJQUNILE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxDQUNILENBQUM7QUFFRixNQUFNLFFBQVEsR0FBdUIsWUFBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNyRCxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUNoQyxxQkFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQ3hCLGVBQUcsQ0FBQyxDQUFDLFFBQTRCLEVBQUUsRUFBRTtJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ1YsSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUNILENBQUM7QUFDRixjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLElBQUksRUFBRSxDQUFDLElBQVMsRUFBRSxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFDLENBQUM7QUFDSCxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyJ9