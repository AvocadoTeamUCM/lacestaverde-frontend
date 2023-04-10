import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Business } from 'src/app/models/business';
import { ActivatedRoute, Params } from '@angular/router';
import { BusinessServiceService } from 'src/app/services/business/business-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss'],
})
export class BusinessPageComponent  implements OnInit {

  public business: Business = {}
  public imageURL: string = ''
  
  constructor(
    private _activatedRouter:ActivatedRoute,
    private router: Router,
    private _service: BusinessServiceService) { }

  ngOnInit() {
    this.imageURL = this._service.imageURL;
    this._activatedRouter.params.subscribe(params => {
      const id = params['id']
      if(id !== null) {
        this.fetchBusiness(id)
      }
    });
    const mapboxgl = require('mapbox-gl');
 
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamxlYWwiLCJhIjoiY2xmaWk2MzQwNGpqYzN5bnQ4MDFqeGJ2eSJ9.zaMfzrH3EN6hqtpiMIXaWw';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  
  }


  /************************************************************************** 
   * DEDICATED METHODS
  ***************************************************************************/

  fetchBusiness(businessId: string) {
    this._service.getBusinessById(businessId).pipe(
      map(res => this.business = res)
    ).subscribe();
  };


  buttonClic_goProduct(){
    this.router.navigateByUrl("/catalog/product");
    return;
  }

}
