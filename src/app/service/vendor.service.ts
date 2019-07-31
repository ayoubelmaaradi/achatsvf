import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Vendor} from '../model/vendor.model';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl = 'http://localhost:3000';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient ) {
  }

  // POST
  public createVendor(data: Vendor): Observable<Vendor> {
    return this.http.post<Vendor>(this.baseurl + '/vendors', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  public getVendor(id: Vendor): Observable<any> {
    return this.http.get(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  public getAll(): Observable<any> {
    return this.http.get(this.baseurl + '/vendors')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // PUT
  public updateVendor(id: number, data: Vendor): Observable<Vendor> {
    return this.http.put<Vendor>(this.baseurl + '/vendors' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // DELETE
  public deleteVendor(id: number) {
    return this.http.delete<Vendor>(this.baseurl + '/vendors' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // Error handling
  public errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
