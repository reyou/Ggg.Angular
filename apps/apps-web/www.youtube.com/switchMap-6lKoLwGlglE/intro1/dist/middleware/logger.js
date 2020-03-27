"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerMiddleware = (req, resp, next) => {
    console.log('Request logged:', req.method, req.path);
    next();
};
exports.default = loggerMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEdBQVksRUFBRSxJQUFjLEVBQUUsSUFBUyxFQUFFLEVBQUU7SUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQztBQUVGLGtCQUFlLGdCQUFnQixDQUFDIn0=