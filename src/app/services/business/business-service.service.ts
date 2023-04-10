import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Business } from 'src/app/models/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessServiceService {

  baseURL = environment.baseURL;
  imageURL = this.baseURL+'business/getFile/'

  constructor(
    private _http: HttpClient
  ) { }

  getBusinessById(businessId: string) {
    return this._http.get<Business>(`${this.baseURL}business/${businessId}`)
  }
}
