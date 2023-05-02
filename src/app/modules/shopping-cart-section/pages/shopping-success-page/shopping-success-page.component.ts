import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-shopping-success-page',
  templateUrl: './shopping-success-page.component.html',
  styleUrls: ['./shopping-success-page.component.scss'],
})
export class ShoppingSuccessPageComponent  implements OnInit {

  public isMobile: Boolean;

  constructor(
    private router: Router,
    public platform: Platform
  ) {
    this.isMobile = !platform.is('desktop');
   }

  ngOnInit() {}

  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goToCatalog(){
    this.router.navigateByUrl("/catalog");
    return;
  }


}
