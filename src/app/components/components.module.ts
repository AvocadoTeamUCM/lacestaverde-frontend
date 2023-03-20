import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BusinessCardComponent } from './business-card/business-card.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { ProductStatsComponent } from './product-stats/product-stats.component';
import { BuyButtonComponent } from './buy-button/buy-button.component';
import { CestProductCartComponent } from './cest-product-cart/cest-product-cart.component';


@NgModule({
  declarations: [
    BusinessCardComponent,
    BuyButtonComponent,
    CestProductCartComponent,
    FilterListComponent,
    MainHeaderComponent,
    ProductCardComponent,
    ProductStatsComponent
  ],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ComponentsRoutingModule
  ],
  exports:[
    BusinessCardComponent,
    BuyButtonComponent,
    CestProductCartComponent,
    FilterListComponent,
    MainHeaderComponent,
    ProductCardComponent,
    ProductStatsComponent
  ]
})
export class ComponentsModule { }
