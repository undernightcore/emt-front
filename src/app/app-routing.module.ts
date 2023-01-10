import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {HomeComponent} from "./pages/home/home.component";
import {LoginGuard} from "./guards/login.guard";
import {RegisterComponent} from "./pages/register/register.component";
import {ActivateComponent} from "./pages/activate/activate.component";

const routes: Routes = [
  {
    title: 'EMT - Inicio de sesión',
    path: 'login',
    component: LoginComponent
  },
  {
    title: 'EMT - Registro',
    path: 'register',
    component: RegisterComponent
  },
  {
    title: 'EMT - Tickets',
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    title: 'EMT - Activate',
    path: 'activate/:id',
    component: ActivateComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
