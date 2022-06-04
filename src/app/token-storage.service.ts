import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  TOKEN_KEY = 'auth-token';
  USER_KEY = 'auth-user';
   helper = new JwtHelperService();
   rememberMe:boolean=true;
   
  constructor() { }
      
  isRememberOn(){
    console.log(this.rememberMe)
    if(this.rememberMe)
    return localStorage;
    else 
    return sessionStorage;

  }
  
  getToken(): string | null {
    let tmp = this.isRememberOn().getItem(this.TOKEN_KEY);
    console.log(this.isRememberOn())
    console.log(localStorage)
    if (tmp&& !this.isTokenExpired(tmp)) {         //&& !this.isTokenExpired(tmp)
      // console.log('is expired:'+this.isTokenExpired(tmp));
      return tmp
    }
    return null;
  }
  saveToken(token: string) {
    this.isRememberOn().setItem(this.TOKEN_KEY, token);
    console.log(this.rememberMe);

  }
  getUser() {
    return this.isRememberOn().getItem(this.USER_KEY)
  }
  saveUser(user: string) {
    this.isRememberOn().setItem(this.USER_KEY, JSON.stringify(user));
  }
  logout() {

    this.isRememberOn().clear();
  }
  isTokenExpired(token: string) {
    // this.helper.getTokenExpirationDate(token);
    console.log('toke exp cheked')
    console.log(this.helper.isTokenExpired(token))
    return this.helper.isTokenExpired(token);
    // const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    
    // return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  isAdmin(){
    let token=this.isRememberOn().getItem(this.TOKEN_KEY);
    if(token){

      console.log(this.helper.decodeToken(token))
      return this.helper.decodeToken(token).isAdmin;
    }
    return false;
  }
  getUserName(){
    let token=this.isRememberOn().getItem(this.TOKEN_KEY);
    if(token)
    return this.helper.decodeToken(token).firstName
    return 
  }
  getEmployeeId(){
    
    let token=this.isRememberOn().getItem(this.TOKEN_KEY);
    if(token)
    return this.helper.decodeToken(token).employeeId
    return 
  }
  getSupervisorId(){
    let token=this.isRememberOn().getItem(this.TOKEN_KEY);
    if(token)
    return this.helper.decodeToken(token).supervisorId
    return 
  }
}
