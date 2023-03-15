import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartSectionRoutingModule } from './shopping-cart-section-routing.module';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ShoppingCartPageComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    ShoppingCartSectionRoutingModule,
    ComponentsModule
  ]
})
export class ShoppingCartSectionModule { }
