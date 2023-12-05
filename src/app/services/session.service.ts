import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  router = inject(Router);
  
  // 1. ruta
  private url = "http://127.0.0.1:8000/api/auth";

  constructor(private http: HttpClient) { }

  // 2. Acciones
  login(form: User) {


    return this.http.post(`${this.url}/login`, form, { withCredentials: true });


  }

  logout() {


    return this.http.post(`${this.url}/logout`, {}, { withCredentials: true });
     

  }


  me(){

    return this.http.get(`${this.url}/me`);

  }

  refresh() {

    return this.http.post(`${this.url}/refresh`, {}, { withCredentials: true });

  }

}
