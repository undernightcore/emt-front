import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {HomeComponent} from "./pages/home/home.component";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [
  {
    title: 'EMT - Home',
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    title: 'EMT - Login',
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
