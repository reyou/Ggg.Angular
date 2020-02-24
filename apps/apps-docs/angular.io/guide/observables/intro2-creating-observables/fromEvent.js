"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
function fromEvent(target, eventName) {
    return new rxjs_1.Observable(observer => {
        const handler = (e) => observer.next(e);
        // Add the event handler to the target
        target.addEventListener(eventName, handler);
        return () => {
            // Detach the event handler from the target
            target.removeEventListener(eventName, handler);
        };
    });
}
const ESC_KEY = 27;
const nameInput = document.getElementById("name");
const subscription = fromEvent(nameInput, "keydown").subscribe((e) => {
    if (e.keyCode === ESC_KEY) {
        nameInput.value = "";
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbUV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJvbUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQWtDO0FBRWxDLFNBQVMsU0FBUyxDQUFDLE1BQVcsRUFBRSxTQUFjO0lBQzVDLE9BQU8sSUFBSSxpQkFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQy9CLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9DLHNDQUFzQztRQUN0QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTVDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsMkNBQTJDO1lBQzNDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ25CLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFxQixDQUFDO0FBQ3RFLE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUM1RCxDQUFDLENBQWdCLEVBQUUsRUFBRTtJQUNuQixJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1FBQ3pCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQyxDQUNGLENBQUMifQ==