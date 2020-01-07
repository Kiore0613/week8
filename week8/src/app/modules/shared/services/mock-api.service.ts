import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MockApiService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "/api/login";
  }

  login(credentials) {
    return this.http
      .post(this.baseUrl, JSON.stringify(credentials))
      .pipe(
        catchError((error: HttpErrorResponse) => of(null) as Observable<String>)
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
}
