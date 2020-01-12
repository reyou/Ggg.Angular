import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from '@angular/core';
import { Model } from '../model/repository.model';
@Component({
  selector: 'paProductCount',
  template: `
    <div class="bg-info text-white p-2">There are{{ count }} products</div>
  `
})
export class ProductCountComponent {
  private differ: KeyValueDiffer<any, any>;
  count: number = 0;
  constructor(
    private model: Model,
    private keyValueDiffers: KeyValueDiffers,
    private changeDetector: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
  }
  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) != null) {
      this.updateCount();
    }
  }
  private updateCount() {
    this.count = this.model.getProducts().length;
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
