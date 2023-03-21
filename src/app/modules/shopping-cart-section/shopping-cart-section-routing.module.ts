import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';
import { ShoppingSuccessPageComponent } from './pages/shopping-success-page/shopping-success-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "", component:ShoppingCartPageComponent},
      {path: "success", component:ShoppingSuccessPageComponent},
      {path: "**", redirectTo:""}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartSectionRoutingModule { }
