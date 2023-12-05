import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  let router = inject(Router);

  return next(req).pipe(

    catchError((error) =>{

      if([401, 403].includes(error.status)){
        
        localStorage.removeItem('access_token');

        router.navigateByUrl("/login");
      }
      else if([404].includes(error.status)){
        console.log("NOT FOUND");
      }

      const e = error.error.message || error.statusText;

      return throwError(() => error);

    })
  );

};
