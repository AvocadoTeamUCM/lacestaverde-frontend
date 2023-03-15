import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-success-page',
  templateUrl: './create-account-success-page.component.html',
  styleUrls: ['./create-account-success-page.component.scss'],
})
export class CreateAccountSuccessPageComponent  implements OnInit {

  constructor(
    private router:Router,   
  ) { }

  ngOnInit() {}


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goCatalog(){
    this.router.navigateByUrl("/catalog");
    return;
  }

}
