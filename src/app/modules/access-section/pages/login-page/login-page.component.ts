import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent  implements OnInit {

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

  buttonClic_goCreateAccount(){
    this.router.navigateByUrl("/access/createAccount");
    return;
  }

}
