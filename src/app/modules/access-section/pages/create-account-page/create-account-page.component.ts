import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-page',
  templateUrl: './create-account-page.component.html',
  styleUrls: ['./create-account-page.component.scss'],
})
export class CreateAccountPageComponent  implements OnInit {

  formCreateAccount: FormGroup = this.fb.group({
    name: ["test1", [Validators.required]],
    email: ["test1@gmail.com", [Validators.required, Validators.email]],
    password: ["101010", [Validators.required, Validators.minLength(6)]],
    aceptTerms: [true, [Validators.required, Validators.requiredTrue]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ){}

  ngOnInit() {}

  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goLogin(){
    this.router.navigateByUrl("/access/login");
    return;
  }

  registrarse(){
    const{name, email, password} = this.formCreateAccount.value;
    this.router.navigateByUrl("/access/createAccountSuccess");
    return;
  }


}
