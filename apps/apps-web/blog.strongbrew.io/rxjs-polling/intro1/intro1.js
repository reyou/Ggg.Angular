"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://blog.strongbrew.io/rxjs-polling/
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const axios_1 = require("axios");
// https://itnext.io/working-with-axios-and-rxjs-to-make-simple-ajax-service-module-6fda9ecdaf9f
const bitcoin$ = rxjs_1.from(axios_1.default.get('https://blockchain.info/ticker'));
const trigger$ = rxjs_1.timer(0, 1000);
let polledBitcoin$ = trigger$.pipe(operators_1.concatMap((number, index) => {
    console.log({
        item: 'concatMap',
        number,
        index
    });
    return bitcoin$;
}), operators_1.map((response) => {
    return response.data;
}));
polledBitcoin$.subscribe({
    next: (data) => {
        console.log(data.USD);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTJDO0FBQzNDLCtCQUE2RDtBQUM3RCw4Q0FBZ0U7QUFDaEUsaUNBQTZDO0FBRTdDLGdHQUFnRztBQUNoRyxNQUFNLFFBQVEsR0FBbUMsV0FBSSxDQUNuRCxlQUFLLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQzVDLENBQUM7QUFDRixNQUFNLFFBQVEsR0FBdUIsWUFBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVwRCxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUNoQyxxQkFBUyxDQUFDLENBQUMsTUFBYyxFQUFFLEtBQWEsRUFBRSxFQUFFO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNO1FBQ04sS0FBSztLQUNOLENBQUMsQ0FBQztJQUNILE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxFQUNGLGVBQUcsQ0FBQyxDQUFDLFFBQTRCLEVBQUUsRUFBRTtJQUNuQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztBQUNGLGNBQWMsQ0FBQyxTQUFTLENBQUM7SUFDdkIsSUFBSSxFQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9