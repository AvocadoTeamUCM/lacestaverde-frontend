import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent  implements OnInit {

  public statusInfo:string;
  public formLogin: FormGroup = this.fb.group({
      email: ["test1@gmail.com", [Validators.required, Validators.email]],
      password: ["101010", [Validators.required, Validators.minLength(6)]],
      //aceptService: ["true", Validators.required, Validators.requiredTrue]
  });

  public isMobile: Boolean;
  
  constructor(
      private fb:FormBuilder,
      private router:Router,
      public platform: Platform
) { 
    this.statusInfo="";
    this.isMobile = !platform.is('desktop');
  }

  ngOnInit() {}


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  public login(){
    const{email, password} = this.formLogin.value;
    this.router.navigateByUrl("/catalog");
    return;
  }

  buttonClic_goCreateAccount(){
    this.router.navigateByUrl("/access/createAccount");
    return;
  }

}
