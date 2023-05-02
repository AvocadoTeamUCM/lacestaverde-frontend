import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/models/profile.model'; 
import { environment } from 'src/environments/environment'; 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseURL = environment.baseURL;

  constructor(private _http: HttpClient) { }

  getProfile(userId: string) {
    return this._http.get<Profile>(`${this.baseURL}user/${userId}`);
  }
}
