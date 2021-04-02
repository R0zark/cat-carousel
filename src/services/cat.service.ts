import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  public url:string;
  constructor(
    public _http: HttpClient
  ) {
    this.url = "https://api.thecatapi.com/v1/images/search";
  }
   getCat():Observable<any>{
      return  this._http.get(this.url);
   }
}
