import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Profile } from 'src/app/models/profile.model';
import { UserService } from 'src/app/services/user/user.service';
import { Business } from 'src/app/models/business';
import { BusinessServiceService } from 'src/app/services/business/business-service.service';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent  implements OnInit {

  public isMobile: Boolean;
  profile: Profile = {}
  businessUserId: Business[] = []
  constructor(
    private router:Router,
    public platform: Platform,
    private user: UserService,
    private _business: BusinessServiceService
  ) { 
    this.isMobile = !platform.is('desktop');
  }

  ngOnInit() {
    this.user.getProfile('6419eafc23362eb2a9384bd2').subscribe(res =>
      this.profile = res
    )
    this._business.getBusinessByUserId('6419eafc23362eb2a9384bd2').subscribe(res=>{
      this.businessUserId = res}
      )
  }


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
