/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';

export interface QueryParamsModel {
  [key: string]: string | number;
}

@Injectable()
export class ApiService {
  private readonly headers: HttpHeaders;

  constructor(private readonly http: HttpClient, private snackBar: MatSnackBar) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  private formatErrors(error: HttpErrorResponse): Observable<never> {
    this.snackBar.open(`ERROR ${error.status}: ${error.statusText}`, 'OK');
    return throwError(error);
  }

  formatQueryParams(queryParamsModel: QueryParamsModel): string {
    const getValue = (key: string): string => {
      const value = (queryParamsModel as Record<string, string>)[key];
      return Array.isArray(value) ? value.map(item => encodeURI((item as { id: string }).id)).join(',') : encodeURI(value);
    };
    const queryParamsStr = Object.keys(queryParamsModel).map(key => `${encodeURI(key)}=${getValue(key)}`).join('&');
    return queryParamsStr ? `?${queryParamsStr}` : '';
  }

  get(path: string, params: HttpParams = new HttpParams(), apiUrl ?: string): Observable<any> {
    const url = apiUrl ? `${apiUrl}${path}` : `${environment.api}${path}`;
    return this.http.get(url, { params, headers: this.headers }).pipe(catchError(this.formatErrors.bind(this)));
  }

  put(path: string, body: unknown = { }, apiUrl ?: string): Observable<any> {
    const url = apiUrl ? `${apiUrl}${path}` : `${environment.api}${path}`;
    return this.http.put(url, JSON.stringify(body), { headers: this.headers }).pipe(catchError(this.formatErrors.bind(this)));
  }

  patch(path: string, body: unknown = { }, apiUrl ?: string): Observable<any> {
    const url = apiUrl ? `${apiUrl}${path}` : `${environment.api}${path}`;
    return this.http.patch(url, JSON.stringify(body), { headers: this.headers }).pipe(catchError(this.formatErrors.bind(this)));
  }

  post(path: string, body: unknown = { }, apiUrl ?: string): Observable<any> {
    const url = apiUrl ? `${apiUrl}${path}` : `${environment.api}${path}`;
    return this.http.post(url, JSON.stringify(body), { headers: this.headers }).pipe(catchError(this.formatErrors.bind(this)));
  }

  delete(path: string, body: unknown = { }, apiUrl ?: string): Observable<any> {
    const url = apiUrl ? `${apiUrl}${path}` : `${environment.api}${path}`;
    return this.http.request('delete', url, { body, headers: this.headers }).pipe(catchError(this.formatErrors.bind(this)));
  }
}
