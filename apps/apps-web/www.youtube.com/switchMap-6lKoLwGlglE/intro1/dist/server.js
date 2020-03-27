"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bodyParser = require("body-parser");
const logger_1 = require("./middleware/logger");
const home_controller_1 = require("./controllers/home/home.controller");
const app = new app_1.default({
    port: 5000,
    controllers: [new home_controller_1.default()],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        logger_1.default
    ]
});
app.listen();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUF3QjtBQUV4QiwwQ0FBMEM7QUFDMUMsZ0RBQW1EO0FBRW5ELHdFQUFnRTtBQUVoRSxNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUcsQ0FBQztJQUNsQixJQUFJLEVBQUUsSUFBSTtJQUNWLFdBQVcsRUFBRSxDQUFDLElBQUkseUJBQWMsRUFBRSxDQUFDO0lBQ25DLFdBQVcsRUFBRTtRQUNYLFVBQVUsQ0FBQyxJQUFJLEVBQUU7UUFDakIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN6QyxnQkFBZ0I7S0FDakI7Q0FDRixDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMifQ==