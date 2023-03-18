import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { ProductStatsComponent } from './product-stats/product-stats.component';


@NgModule({
  declarations: [
    FilterListComponent,
    MainHeaderComponent,
    ProductCardComponent,
    ProductStatsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    ComponentsRoutingModule
  ],
  exports:[
    FilterListComponent,
    MainHeaderComponent,
    ProductCardComponent,
    ProductStatsComponent
  ]
})
export class ComponentsModule { }
