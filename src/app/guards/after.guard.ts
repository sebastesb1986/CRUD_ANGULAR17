import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';


export const afterGuard: CanActivateFn = (next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean => {
  
    let router = inject(Router);
    let tokenService = inject(TokenService);

    if(tokenService.loggedIn()){
      
      return true;
      
    }else {

      router.navigateByUrl('/login');
      return false;

    } 
};


