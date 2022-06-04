import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
   httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http:HttpClient) { }
  login(UserName:string,Password:string):Observable<any>{
      return this.http.post(environment.login+'/user-management/login',{"username":UserName,"password":Password},this.httpOptions)
  }
  
  getAll(){
    return this.http.get(environment.getAll+'/api/users?page=2',this.httpOptions)
  }

  
}
