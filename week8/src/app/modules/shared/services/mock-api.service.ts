import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { UserLogin } from "../../app-authentication/models/login";
import { loginAuth } from '../../app-authentication/models/loginAuth';

@Injectable({
  providedIn: "root"
})
export class MockApiService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "https://reqres.in/api/";
  }

  login(credentials: loginAuth) {
    return this.http.post<UserLogin>(`${this.baseUrl}login`, credentials).pipe(
      map((response: UserLogin) => response),
      catchError(this.handleError)
    );
  }
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  register(userData: loginAuth) {
    return this.http.post<UserLogin>(`${this.baseUrl}register`, userData).pipe(
      map((response:UserLogin) => response),
      catchError(this.handleError)
    )
  }
}
