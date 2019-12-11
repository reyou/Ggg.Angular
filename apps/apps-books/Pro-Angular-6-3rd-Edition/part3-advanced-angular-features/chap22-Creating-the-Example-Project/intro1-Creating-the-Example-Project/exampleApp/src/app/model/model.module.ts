import { Model } from "./repository.model";
import { StaticDataSource } from "./static.datasource";
import { NgModule } from "@angular/core";

@NgModule({ providers: [Model, StaticDataSource] })
export class ModelModule {}
