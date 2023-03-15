import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent  implements OnInit {

  @Input() public actualPage:String = "";
  
  constructor(
    private router:Router
  ) { }

  ngOnInit() {}


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goCatalog(){
    this.router.navigateByUrl("/");
    return;
  }

  buttonClic_goProfile(){
    this.router.navigateByUrl("/profile");
    return;
  }

  buttonClic_goShoppingCart(){
    this.router.navigateByUrl("/shopping-cart");
    return;
  }



}
