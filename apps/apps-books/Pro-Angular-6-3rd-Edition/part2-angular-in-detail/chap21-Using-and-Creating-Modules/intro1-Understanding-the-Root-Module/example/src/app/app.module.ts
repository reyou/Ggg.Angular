import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductTableComponent } from './component/productTable.component';
import { ProductFormComponent } from './component/productForm.component';
import { CommonModule } from './common/common.module';
import { ModelModule } from './models/model.module';
import { ComponentsModule } from './component/components.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule,
    CommonModule,
    ComponentsModule
  ],
  bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule {}
