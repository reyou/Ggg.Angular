import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AComponent } from './a.component';
import { BComponent } from './b.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AComponent, BComponent],
  entryComponents: [AComponent, BComponent]
})
export class AppModule {
  ngDoBootstrap(app) {
    fetch('url/to/fetch/component/name')
      .then((name) => { bootstrapRootComponent(app, name) });
  }
}


// app - reference to the running application (ApplicationRef)
// name - name (selector) of the component to bootstrap
function bootstrapRootComponent(app, name) {
  // define the possible bootstrap components 
  // with their selectors (html host elements)
  const options = {
    'a-comp': AComponent,
    'b-comp': BComponent
  };
  // obtain reference to the DOM element that shows status
  // and change the status to `Loaded`
  const statusElement = document.querySelector('#status');
  statusElement.textContent = 'Loaded';
  // create DOM element for the component being bootstrapped
  // and add it to the DOM
  const componentElement = document.createElement(name);
  document.body.appendChild(componentElement);
  // bootstrap the application with the selected component
  const component = options[name];
  app.bootstrap(component);
}

function fetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('b-comp');
    }, 2000);
  });
}