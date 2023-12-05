import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let router = inject(Router);

  // Obtenemos el token
  const token = localStorage.getItem('access_token');
 
  const request = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(request);

};
