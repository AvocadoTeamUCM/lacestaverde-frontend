import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';


const routes: Routes = [
  {
    path:"",
    children:[
      {path: "", component:CatalogPageComponent},
      {path: "product", component:ProductPageComponent},
      {path: "**", redirectTo:""}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogSectionRoutingModule { }
