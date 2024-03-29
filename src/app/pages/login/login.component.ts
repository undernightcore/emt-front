import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorInterface } from '../../interfaces/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private sb: MatSnackBar
  ) {}

  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;
    this.authService
      .login(
        this.loginForm.value.email ?? '',
        this.loginForm.value.password ?? ''
      )
      .subscribe({
        next: () => {
          this.router.navigateByUrl('');
        },
        error: (error) => {
          const displayError = error.error as ErrorInterface
          this.sb.open(displayError.errors[0], undefined, { duration: 2000});
        },
      });
  }
}
