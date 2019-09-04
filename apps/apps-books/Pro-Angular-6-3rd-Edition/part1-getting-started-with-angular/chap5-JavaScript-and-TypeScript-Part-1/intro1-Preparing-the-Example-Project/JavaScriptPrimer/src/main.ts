let myFunc = function (name, weather, ...extraArgs) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
  for (let i = 0; i < extraArgs.length; i++) {
    console.log("Extra Arg: " + extraArgs[i]);
  }
};
myFunc("Adam", "sunny", "one", "two", "three");
// Using Arrow Functions in the main.ts File in the src Folder
let myFunc2 = (nameFunction) => ("Hello " + nameFunction() + ".");
let printName = (nameFunction, printFunction) => printFunction(myFunc2(nameFunction));

let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.50, stock: 20 }
];
let totalValue = products
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0);
console.log("Total value: $" + totalValue.toFixed(2));
