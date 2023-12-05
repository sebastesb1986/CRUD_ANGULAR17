import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = inject(TokenService).loggedIn(); 
  
  private loggedIn = new BehaviorSubject<boolean>(this.token);
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus( value:boolean ){

    this.loggedIn.next(value);

  }
  
}
