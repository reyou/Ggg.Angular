"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ajax_1 = require("rxjs/ajax");
const rxjs_1 = require("rxjs");
/*
  when all observables complete, provide the last
  emitted value from each as dictionary
*/
rxjs_1.forkJoin(
// as of RxJS 6.5+ we can use a dictionary of sources
{
    google: ajax_1.ajax.getJSON('https://api.github.com/users/google'),
    microsoft: ajax_1.ajax.getJSON('https://api.github.com/users/microsoft'),
    users: ajax_1.ajax.getJSON('https://api.github.com/users')
})
    // { google: object, microsoft: object, users: array }
    .subscribe(console.log);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUFpQztBQUNqQywrQkFBZ0M7QUFFaEM7OztFQUdFO0FBQ0YsZUFBUTtBQUNOLHFEQUFxRDtBQUNyRDtJQUNFLE1BQU0sRUFBRSxXQUFJLENBQUMsT0FBTyxDQUFDLHFDQUFxQyxDQUFDO0lBQzNELFNBQVMsRUFBRSxXQUFJLENBQUMsT0FBTyxDQUFDLHdDQUF3QyxDQUFDO0lBQ2pFLEtBQUssRUFBRSxXQUFJLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO0NBQ3BELENBQ0Y7SUFDQyxzREFBc0Q7S0FDckQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyJ9