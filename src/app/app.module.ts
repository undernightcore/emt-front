import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { SubheaderComponent } from './components/subheader/subheader.component';
import { HomeComponent } from './pages/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RegisterComponent} from "./pages/register/register.component";
import { ActivateDialogComponent } from './components/ok-dialog/activate-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { MinDiffPipe } from './pipes/min-diff.pipe';
import { ActivateComponent } from './pages/activate/activate.component';
import { TicketItemComponent } from './components/ticket-item/ticket-item.component';
import { TicketComponent } from './pages/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    SubheaderComponent,
    HomeComponent,
    ActivateDialogComponent,
    MinDiffPipe,
    ActivateComponent,
    TicketItemComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
