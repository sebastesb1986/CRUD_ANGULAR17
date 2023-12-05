import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { beforeGuard } from './guards/before.guard';
import { afterGuard } from './guards/after.guard';


export const routes: Routes = [

    // RUTAS APLICACIÓN
    { path: 'home', component: HomeComponent, canActivate: [afterGuard] },
    { path: 'login', component: LoginComponent, canActivate: [beforeGuard] },
   // { path: 'register', component: RegisterComponent },
    // { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];
