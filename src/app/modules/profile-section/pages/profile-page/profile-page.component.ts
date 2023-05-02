import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent  implements OnInit {

  public isMobile: Boolean;

  constructor(
    private router:Router,
    public platform: Platform
  ) { 
    this.isMobile = !platform.is('desktop');
  }

  ngOnInit() {}


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goBusiness(){
    this.router.navigateByUrl("/business");
    return;
  }


  buttonClic_goLogin(){
    this.router.navigateByUrl("/access/login");
    return;
  }

}
