"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class HomeController {
    constructor() {
        this.path = '/';
        this.router = express.Router();
        this.index = (req, res) => {
            const users = [
                {
                    id: 1,
                    name: 'Ali'
                },
                {
                    id: 2,
                    name: 'Can'
                },
                {
                    id: 3,
                    name: 'Ahmet'
                }
            ];
            res.sendFile('src/views/home' + '/index.html');
            // res.render('home/index', { users });
        };
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', this.index);
    }
}
exports.default = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2hvbWUvaG9tZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBSW5DLE1BQU0sY0FBYztJQUlsQjtRQUhPLFNBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxXQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBVWpDLFVBQUssR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUN0QyxNQUFNLEtBQUssR0FBRztnQkFDWjtvQkFDRSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxJQUFJLEVBQUUsS0FBSztpQkFDWjtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxJQUFJLEVBQUUsS0FBSztpQkFDWjtnQkFDRDtvQkFDRSxFQUFFLEVBQUUsQ0FBQztvQkFDTCxJQUFJLEVBQUUsT0FBTztpQkFDZDthQUNGLENBQUM7WUFDRixHQUFHLENBQUMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxDQUFDO1lBQy9DLHVDQUF1QztRQUN6QyxDQUFDLENBQUM7UUF4QkEsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBb0JGO0FBRUQsa0JBQWUsY0FBYyxDQUFDIn0=