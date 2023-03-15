import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogSectionRoutingModule } from './catalog-section-routing.module';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    CatalogPageComponent,
    ProductPageComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    CatalogSectionRoutingModule,
    ComponentsModule
  ]
})
export class CatalogSectionModule { }
