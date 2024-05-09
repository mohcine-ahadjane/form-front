import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }
  getAllUsers(){
    return this.http.get(`${environment.api.url}users`);
  }
  getUser(id:any){
    return this.http.get(`${environment.api.url}users/${id}`);
  }
  saveUser(user: any){
    return this.http.post(`${environment.api.url}users`, user)
  }
  updateUser(user:any, id: any) {
    return this.http.post(`${environment.api.url}users`, user)
  }
  deleteUser(id:any){
    return this.http.delete(`${environment.api.url}users/${id}`);
  }
}
