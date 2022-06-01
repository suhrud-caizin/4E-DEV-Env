import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   AUTH_API = 'https://dev-api.tqmi.io/user-management/login';
   httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }
  login(UserName:string,Password:string):Observable<any>{
      return this.http.post(this.AUTH_API,{"username":UserName,"password":Password},this.httpOptions)
  }
  
  getAll(){
    return this.http.get('https://reqres.in/api/users?page=2',this.httpOptions)
  }

  
}
