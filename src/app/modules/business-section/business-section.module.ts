import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessSectionRoutingModule } from './business-section-routing.module';
import { BusinessPageComponent } from './pages/business-page/business-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    BusinessPageComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    BusinessSectionRoutingModule,
    ComponentsModule
  ]
})
export class BusinessSectionModule { }
