import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginUrl = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) { }

  public login(loginData) {
    return this.http.post(this.loginUrl, loginData).pipe(
      catchError(this.handleError('login', []))
    );
  }

  private handleError(operation = 'operation', result?) {
    return (error) => {
      console.error(error); // log to console instead
      console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}
