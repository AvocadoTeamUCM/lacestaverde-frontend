import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessPageComponent } from './pages/business-page/business-page.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "businessId/:id", component:BusinessPageComponent},
      {path: "**", redirectTo:""}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessSectionRoutingModule { }
