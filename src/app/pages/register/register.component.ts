import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorInterface } from '../../interfaces/error';
import {MatDialog} from "@angular/material/dialog";
import {ActivateDialogComponent} from "../../components/ok-dialog/activate-dialog.component";

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  loginForm = this.fb.group({
    name: ['', [Validators.minLength(3), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private sb: MatSnackBar,
    private ds: MatDialog
  ) {}

  register() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;
    this.authService
      .register(
        this.loginForm.value.name ?? '',
        this.loginForm.value.email ?? '',
        this.loginForm.value.password ?? '',
      )
      .subscribe({
        next: (message) => {
          this.router.navigateByUrl('/login').then(() => {
            this.ds.open(ActivateDialogComponent, {data: message.message})
          });
        },
        error: (error) => {
          const displayError = error.error as ErrorInterface
          this.sb.open(displayError.errors[0], undefined, { duration: 2000});
        },
      });
  }
}
