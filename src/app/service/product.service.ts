import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Product} from '../model/product.model';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
  public createProduct(data: Product): Observable<Product> {
    return this.http.post<Product>(this.baseurl + '/products', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  public getProduct(id: Product): Observable<any> {
    return this.http.get(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  public getAll(): Observable<any> {
    return this.http.get(this.baseurl + '/products')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // PUT
  public updateProduct(id: number, data: Product): Observable<Product> {
    return this.http.put<Product>(this.baseurl + '/products' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // DELETE
  public deleteProduct(id: number) {
    return this.http.delete<Product>(this.baseurl + '/products' + id, this.httpOptions)
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
