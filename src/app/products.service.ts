import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProductsdetails(token:any):Observable<any>{
    const headers = new HttpHeaders({
      "Authorization":"Bearer "+token
     });
     //headers.set("Content-Type","application/form-data");
    // headers.set();
     return this.http.get<any>
     ('https://api.kalpav.com/api/v1/product/category/retail',
     {headers})
  }
}
