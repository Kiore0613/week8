import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserLogin } from '../../app-authentication/models/login';
import { CredentialAuth } from '../../app-authentication/models/credential';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl: string;
  private isLogged = false;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.baseUrl = 'https://reqres.in/api/';
  }

  login(credentials: CredentialAuth) {
    return this.http.post<UserLogin>(`${this.baseUrl}login`, credentials).pipe(
      tap((response) => {
        this.localStorageService.setToken(response.token);
        this.isLogged = true;
      }),
      catchError((error) => this.handleErrorLogin(error))
    );
  }

  logged() {
    if (this.localStorageService.getToken()) {
      this.isLogged = true;
    }
    return this.isLogged;
  }

  isLogIn() {
    return this.localStorageService.hasToken();
  }

  logout() {
    return this.localStorageService.removeToken();
  }

  register(userData: CredentialAuth) {
    return this.http.post<UserLogin>(`${this.baseUrl}register`, userData).pipe(
      map((response: UserLogin) => response),
      catchError(this.handleErrorRegister)
    );
  }

  handleErrorLogin(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `The email you’ve entered doesn’t match any account`;
      console.log(errorMessage);
    }
    return throwError(errorMessage);
  }

  handleErrorRegister(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Data invalid, please try again`;
      console.log(errorMessage);
    }
    return throwError(errorMessage);
  }
}
