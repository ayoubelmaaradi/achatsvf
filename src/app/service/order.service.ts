import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../model/product.model';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Order} from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

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
  public createOrder(data: Order): Observable<Order> {
    return this.http.post<Order>(this.baseurl + '/orders', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  public getOrder(id: Order): Observable<any> {
    return this.http.get(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  public getAll(): Observable<any> {
    return this.http.get(this.baseurl + '/orders')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // PUT
  public updateOrder(id: number, data: Order): Observable<Order> {
    return this.http.put<Order>(this.baseurl + '/orders' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // DELETE
  public deleteOrder(id: number) {
    return this.http.delete<Order>(this.baseurl + '/orders' + id, this.httpOptions)
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
