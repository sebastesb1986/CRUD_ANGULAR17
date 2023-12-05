import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://127.0.0.1:8000/api/auth/login',
    signup: 'http://127.0.0.1:8000/api/auth/register'
  };

  constructor() { }

  handle(token: any) {

    this.set(token);

  }

  set(token: any) {

    localStorage.setItem('access_token', token);

  }

  get() {

    return localStorage.getItem('access_token');

  }

  remove() {

    localStorage.removeItem('access_token');

  }

  isValid() {
    const token = this.get();

    if (token) {

      const payload = this.payload(token);

      if (payload) {

        return this.iss.login === payload.iss;
       
      }
    }
    return false;
  }

  payload(token: any) {

    const payload = token.split('.')[1];
    return this.decode(payload);

  }

  decode(payload: any) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

}
