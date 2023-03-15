import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.scss'],
})
export class CreateAccountPageComponent  implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {}


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goLogin(){
    this.router.navigateByUrl("/access/login");
    return;
  }

  buttonClic_goCreateAccountSuccess(){
    this.router.navigateByUrl("/access/createAccountSuccess");
    return;
  }

}
