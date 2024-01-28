import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import shajs from 'sha.js';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   accessToken:string="UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg=="
  constructor(private http:HttpClient) { }

  loginAuthentication(data:any):Observable<any>{
    const formData = new FormData;
    formData.append("username",data.email);
    //formData.append("password","8776f108e247ab1e2b323042c049c266407c81fbad41bde1e8dfc1bb66fd267e");
    formData.append("password",shajs('sha256').update(data.password).digest('hex'))
    formData.append("grant_type","password");
   
   const headers = new HttpHeaders({
    "Authorization":"Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg=="
   });
   //headers.set("Content-Type","application/form-data");
  // headers.set();
   return this.http.post
   ('https://apiv2stg.promilo.com/user/oauth/token',
   formData,{headers})
  }
}
