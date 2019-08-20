import { Component } from '@angular/core';

/*Decorator that marks a class as an Angular component and provides 
configuration metadata that determines how the component 
should be processed, instantiated, and used at runtime. */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
