import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../model/product.model';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Customer} from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseurl = 'http://localhost:3000';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  // POST
  public createCustomer(data: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseurl + '/customers', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  public getCustomer(id: Customer): Observable<any> {
    return this.http.get(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  public getAll(): Observable<any> {
    return this.http.get(this.baseurl + '/customers')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // PUT
  public updateCustomer(id: number, data: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.baseurl + '/customers' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // DELETE
  public deleteCustomer(id: number) {
    return this.http.delete<Customer>(this.baseurl + '/customers' + id, this.httpOptions)
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
