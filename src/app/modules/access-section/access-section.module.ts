import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessSectionRoutingModule } from './access-section-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { CreateAccountSuccessPageComponent } from './pages/create-account-success-page/create-account-success-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    CreateAccountPageComponent,
    CreateAccountSuccessPageComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    AccessSectionRoutingModule
  ]
})
export class AccessSectionModule { }
