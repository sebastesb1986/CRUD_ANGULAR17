import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../services/session.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  message = '';

  router = inject(Router);
  sessionService = inject(SessionService);
  token = inject(TokenService); 
  auth = inject(AuthService); 
  http = inject(HttpClient);

  ngOnInit(): void {

    this.sessionService.me().subscribe({

      next: (data: any) => {

        this.message = `Bienvenido ${data.logged_in.name}`;

      }

    })

  }

  logout(event: MouseEvent){
  
    event.preventDefault();

    this.sessionService.logout().subscribe({

      next: () => {

        this.token.remove();

        this.auth.changeAuthStatus(false);
        
        this.router.navigateByUrl('/login');

      }


    })
    
  
  }



}
