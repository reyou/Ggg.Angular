import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  /* Decorator that marks a class field as an input property and supplies configuration metadata. 
  The input property is bound to a DOM property in the template. During change detection, 
  Angular automatically updates the data property with the DOM property's value. */
  /* The @Input() decorator indicates that the property value passes in from 
  the component's parent, the product list component. */
  @Input() product;
  /* Decorator that marks a class field as an output property and 
  supplies configuration metadata. The DOM property bound to the output property 
  is automatically updated during change detection. */
  /* This allows the product alert component to emit an event when the value of the notify property changes. */
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
