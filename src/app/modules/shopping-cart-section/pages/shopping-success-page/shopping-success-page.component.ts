import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-success-page',
  templateUrl: './shopping-success-page.component.html',
  styleUrls: ['./shopping-success-page.component.scss'],
})
export class ShoppingSuccessPageComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goToCatalog(){
    this.router.navigateByUrl("/catalog");
    return;
  }


}
