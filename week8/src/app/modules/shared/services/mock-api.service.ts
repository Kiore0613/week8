import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { UserLogin } from '../../app-authentication/models/login';
import { Credential } from '../../app-authentication/models/credential';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private baseUrl: string;
  private isLogged = new BehaviorSubject<boolean>(false);

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
        this.isLogged.next(true);
      }),
      catchError((error) => this.handleError(error))
    );
  }

  logged() {
    if (this.localStorageService.getToken()) {
      this.isLogged.next(true);
    }
    return this.isLogged.asObservable();
  }

  isLogOut() {
    return this.localStorageService.isTokenExist();
  }

  logout() {
    return this.localStorageService.removeToken();
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: data not valid`;
    }
    return throwError(errorMessage);
  }

  register(userData: Credential) {
    return this.http.post<UserLogin>(`${this.baseUrl}register`, userData).pipe(
      map((response: UserLogin) => response),
      catchError(this.handleError)
    );
  }
}
