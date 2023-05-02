import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Business } from 'src/app/models/business';
import { ActivatedRoute, Params } from '@angular/router';
import { BusinessServiceService } from 'src/app/services/business/business-service.service';
import { map } from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss'],
})
export class BusinessPageComponent  implements OnInit, OnDestroy {

  public business: Business = {};
  public imageURL: string = '';
  private lat: string = '';
  private lng: string = '';
  public isMobile: Boolean;
  
  constructor(
    private _activatedRouter:ActivatedRoute,
    private router: Router,
    private _service: BusinessServiceService,
    public platform: Platform) 
  {
    this.isMobile = !platform.is('desktop');
  }

  ngOnInit() {
    this.imageURL = this._service.imageURL;
    this._activatedRouter.params.subscribe(params => {
      const id = params['id']
      if(id !== null) {
        this._service.getBusinessById(id).subscribe(res=> {
          this.business = res;
          this.lat = res.location?.[1]!;
          this.lng = res.location?.[0]!;
          const mapboxgl = require('mapbox-gl');
 
          mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamxlYWwiLCJhIjoiY2xmaWk2MzQwNGpqYzN5bnQ4MDFqeGJ2eSJ9.zaMfzrH3EN6hqtpiMIXaWw';
          const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [this.lat, this.lng], // starting position [lng, lat]
            zoom: 14, // starting zoom

          });

          const marker = new mapboxgl.Marker({color:'red'})
            .setLngLat([this.lat, this.lng])
            .addTo(map);
        });
      }
    });
  };

  ngOnDestroy(): void {
    this.lat = '';
    this.lng = '';
  };

  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/
  buttonClic_goProduct(){
    this.router.navigateByUrl("/catalog/product");
    return;
  };

}
