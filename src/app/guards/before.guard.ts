import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';

export const beforeGuard: CanActivateFn = (next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean => {

    let tokenService = inject(TokenService);

    return !tokenService.loggedIn();
    

};

