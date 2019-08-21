export class Model {
    user;
    items;
    constructor() {
        let todoItems = [new TodoItem("Buy Flowers", false),
        new TodoItem("Get Shoes", false),
        new TodoItem("Collect Tickets", false),
        new TodoItem("Call Joe", false)];
        this.user = "Adam";
        this.items = todoItems
    }
}
export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}