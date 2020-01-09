import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserLogin } from '../../app-authentication/models/login';
import { Credential } from '../../app-authentication/models/credential';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl: string;
  private isLogged: boolean = false;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.baseUrl = 'https://reqres.in/api/';
  }

  login(credentials: Credential) {
    return this.http.post<UserLogin>(`${this.baseUrl}login`, credentials).pipe(
      tap((response) => {
        this.localStorageService.setToken(response.token);
        this.isLogged = true;
      }),
      catchError((error) => this.handleError(error))
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

  register(userData: Credential) {
    return this.http.post<UserLogin>(`${this.baseUrl}register`, userData).pipe(
      map((response: UserLogin) => response),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Data is not valid, Please enter a valid email`;
      console.log(errorMessage);
    }
    return throwError(errorMessage);
  }
}
