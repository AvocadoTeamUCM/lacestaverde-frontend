import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { CreateAccountSuccessPageComponent } from './pages/create-account-success-page/create-account-success-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "login", component:LoginPageComponent},
      {path: "createAccount", component:CreateAccountPageComponent},
      {path: "createAccountSuccess", component:CreateAccountSuccessPageComponent},
      {path: "**", redirectTo:"login"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessSectionRoutingModule { }
