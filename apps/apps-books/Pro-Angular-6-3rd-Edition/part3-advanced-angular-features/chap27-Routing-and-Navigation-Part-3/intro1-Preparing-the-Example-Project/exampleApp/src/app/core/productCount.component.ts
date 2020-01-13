import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from '@angular/core';
import { Model } from '../model/repository.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'paProductCount',
  template: `
    <div class="bg-info text-white p-2">There are{{ count }} products</div>
  `
})
export class ProductCountComponent {
  private differ: KeyValueDiffer<any, any>;
  private category: string;
  count: number = 0;
  constructor(
    private model: Model,
    private keyValueDiffers: KeyValueDiffers,
    private changeDetector: ChangeDetectorRef,
    activeRoute: ActivatedRoute
  ) {
    activeRoute.pathFromRoot.forEach(route =>
      route.params.subscribe(params => {
        if (params['category'] != null) {
          this.category = params['category'];
          this.updateCount();
        }
      })
    );
  }
  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
  }
  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) != null) {
      this.updateCount();
    }
  }
  private updateCount() {
    this.count = this.model
      .getProducts()
      .filter(p => this.category == null || p.category == this.category).length;
  }
}
/*KeyValueDiffers: A repository of different Map diffing strategies used by NgClass, NgStyle, and others. */
/*(alias) class ChangeDetectorRef
import ChangeDetectorRef
Base class for Angular Views, provides change detection functionality. 
A change-detection tree collects all views that are to be checked for changes. 
Use the methods to add and remove views from the tree, initiate change-detection, and explicitly mark views as dirty, 
meaning that they have changed and need to be rerendered.
@usageNotes — The following examples demonstrate how to modify default change-detection behavior to perform explicit detection when needed. */
