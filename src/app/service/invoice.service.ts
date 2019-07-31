import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../model/product.model';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Invoice} from '../model/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

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
  public createInvoice(data: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.baseurl + '/invoice', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  public getInvoice(id: Invoice): Observable<any> {
    return this.http.get(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // GET
  public getAll(): Observable<any> {
    return this.http.get(this.baseurl + '/invoice')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // PUT
  public updateInvoice(id: number, data: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(this.baseurl + '/invoices' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // DELETE
  public deleteInvoice(id: number) {
    return this.http.delete<Invoice>(this.baseurl + '/invoices' + id, this.httpOptions)
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
