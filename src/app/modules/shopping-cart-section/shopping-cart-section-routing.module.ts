import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "", component:ShoppingCartPageComponent},
      {path: "**", redirectTo:""}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartSectionRoutingModule { }
