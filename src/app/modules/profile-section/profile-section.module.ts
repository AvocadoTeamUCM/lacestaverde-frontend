import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSectionRoutingModule } from './profile-section-routing.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    ProfileSectionRoutingModule,
    ComponentsModule
  ]
})
export class ProfileSectionModule { }
