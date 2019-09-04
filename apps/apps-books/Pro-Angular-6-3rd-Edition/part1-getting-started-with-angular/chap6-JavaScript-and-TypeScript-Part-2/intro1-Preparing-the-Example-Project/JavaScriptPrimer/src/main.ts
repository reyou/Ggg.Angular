import { Name, WeatherLocation } from "./modules/NameAndWeather";
class MyClass {
  _weather: any;
  name: any;
  constructor(name, weather) {
    this.name = name;
    this._weather = weather;
  }
  set weather(value) {
    this._weather = value;
  }
  get weather() {
    return `Today is ${this._weather}`;
  }
  printMessages() {
    console.log("Hello " + this.name + ". ");
    console.log(this.weather);
  }
}
class MySubClass extends MyClass {
  city: any;
  constructor(name, weather, city) {
    super(name, weather);
    this.city = city;
  }
  printMessages() {
    super.printMessages();
    console.log(`You are in ${this.city}`);
  }
}
let myData = new MySubClass("Adam", "sunny", "London");
myData.printMessages();
