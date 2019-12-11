import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';

import { MODES, SharedState, SHARED_STATE } from './sharedState.model';
import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, skipWhile } from 'rxjs/operators';
@Component({
  selector: 'paForm',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent {
  product: Product = new Product();
  // lastId: number;
  constructor(
    private model: Model,
    @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>
  ) {
    stateEvents
      .pipe(
        skipWhile(state => {
          return state.mode === MODES.EDIT;
        })
      )
      .pipe(
        distinctUntilChanged(
          (firstState, secondState) =>
            firstState.mode === secondState.mode && firstState.id === secondState.id
        )
      )
      .subscribe(update => {
        this.product = new Product();
        if (update.id !== undefined) {
          Object.assign(this.product, this.model.getProduct(update.id));
        }
        this.editing = update.mode === MODES.EDIT;
      });
  }
  editing = false;

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }
  resetForm() {
    this.product = new Product();
  }
  /* A callback method that performs change-detection, invoked after the default change-detector runs.
  See KeyValueDiffers and IterableDiffers for implementing custom change checking for collections. */
  // ngDoCheck() {
  //   console.log('form.component.ts - ngDoCheck');
  //   if (this.lastId != this.state.id) {
  //     this.product = new Product();
  //     if (this.state.mode == MODES.EDIT) {
  //       Object.assign(this.product, this.model.getProduct(this.state.id));
  //     }
  //     this.lastId = this.state.id;
  //   }
  // }
}
