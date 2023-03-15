import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MainHeaderComponent } from './main-header/main-header.component';


@NgModule({
  declarations: [
    MainHeaderComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    ComponentsRoutingModule
  ],
  exports:[
    MainHeaderComponent
  ]
})
export class ComponentsModule { }
