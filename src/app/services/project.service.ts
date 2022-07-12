import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = environment.api_url;

  constructor(private httpClient:HttpClient) { }
  addP(datosP:Proyecto):Observable<any>{
    return this.httpClient.post(this.url+"?add",datosP);
  }
}
