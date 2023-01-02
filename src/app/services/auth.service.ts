import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';
import { MessageInterface } from '../interfaces/message';
import { TokenInterface } from '../interfaces/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public get token() {
    return window.localStorage.getItem('token') ?? '';
  }

  private set token(value: string) {
    window.localStorage.setItem('token', value)
  }

  constructor(private http: HttpClient) {}

  isLogged() {
    return Boolean(this.token)
  }

  register(name: string, email: string, password: string) {
    return this.http.post<MessageInterface>(
      `${environment.apiBack}/auth/register`,
      { name, email, password }
    );
  }

  login(email: string, password: string) {
    return this.http
      .post<TokenInterface>(`${environment.apiBack}/auth/login`, {
        email,
        password,
      })
      .pipe(tap((token) => this.token = token.token));
  }

  logout() {
    this.token = ''
  }
}
