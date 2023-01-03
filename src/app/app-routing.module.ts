import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {HomeComponent} from "./pages/home/home.component";
import {LoginGuard} from "./guards/login.guard";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {
    title: 'EMT - Tickets',
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    title: 'EMT - Inicio de sesión',
    path: 'login',
    component: LoginComponent
  },
  {
    title: 'EMT - Registro',
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
