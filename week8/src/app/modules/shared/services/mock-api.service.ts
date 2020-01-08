import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserLogin } from '../../app-authentication/models/login';
import { loginAuth } from '../../app-authentication/models/loginAuth';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private baseUrl: string;
  private isLogged = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://reqres.in/api/';
  }

  login(credentials: loginAuth) {
    return this.http.post<UserLogin>(`${this.baseUrl}login`, credentials)
    .pipe(
      tap(() => {
        this.isLogged.next(true);
      }),
      catchError((error) => this.handleError(error))
    );
  }

  logged() {
    if (localStorage.getItem('token')) {
      return this.isLogged;
    }
  }

  handleError(error) {
    let errorMessage = '';
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  register(userData: loginAuth) {
    return this.http.post<UserLogin>(`${this.baseUrl}register`, userData).pipe(
      map((response: UserLogin) => response),
      catchError(this.handleError)
    );
  }
}
