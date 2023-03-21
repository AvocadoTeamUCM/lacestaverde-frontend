import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartSectionRoutingModule } from './shopping-cart-section-routing.module';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ShoppingSuccessPageComponent } from './pages/shopping-success-page/shopping-success-page.component';


@NgModule({
  declarations: [
    ShoppingCartPageComponent,
    ShoppingSuccessPageComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    ShoppingCartSectionRoutingModule,
  ]
})
export class ShoppingCartSectionModule { }
