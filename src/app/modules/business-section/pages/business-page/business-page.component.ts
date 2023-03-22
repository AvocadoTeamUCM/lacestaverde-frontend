import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss'],
})
export class BusinessPageComponent  implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
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
  buttonClic_goProduct(){
    this.router.navigateByUrl("/catalog/product");
    return;
  }

}
