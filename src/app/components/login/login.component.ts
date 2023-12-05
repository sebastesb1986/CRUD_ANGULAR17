import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  // Formulario
  form!: FormGroup;
  error = null;

  // Injectar los elementos en vez de usar un constructor
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  http = inject(HttpClient);
  sessionService = inject(SessionService);
  tokenService = inject(TokenService);
  authService = inject(AuthService);
  
 
  ngOnInit(): void {

    this.form = this.formBuilder.group({

      email: ['', Validators.required],
      password: ['', Validators.required],

    });

  }

  submit() {

    this.sessionService.login(this.form.getRawValue()).subscribe({
      
      next: (data: any) => {
        this.handleResponse(data)

      },
      error: error => {

        this.handleError(error)

      }

    })

  }

  handleResponse(data: any) {
    
    
    this.tokenService.handle(data.access_token);
    this.authService.changeAuthStatus(true);
    this.router.navigateByUrl('/home');
    

  }

  handleError(error:any) {
    
    this.error = error.error;

  }


}
