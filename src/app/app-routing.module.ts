import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: "access",
    loadChildren: () =>import("./modules/access-section/access-section.module").then(m=>m.AccessSectionModule)
  },
  {
    path: "business",
    loadChildren: () =>import("./modules/business-section/business-section.module").then(m=>m.BusinessSectionModule)
  },
  {
    path: "catalog",
    loadChildren: () =>import("./modules/catalog-section/catalog-section.module").then(m=>m.CatalogSectionModule)
  },
  {
    path: "profile",
    loadChildren: () =>import("./modules/profile-section/profile-section.module").then(m=>m.ProfileSectionModule)
  },
  {
    path: "shopping-cart",
    loadChildren: () =>import("./modules/shopping-cart-section/shopping-cart-section.module").then(m=>m.ShoppingCartSectionModule)
  },
  {
    path: "**",
    redirectTo: "catalog"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
