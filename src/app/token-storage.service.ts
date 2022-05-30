import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
   TOKEN_KEY = 'auth-token';
   USER_KEY = 'auth-user';
  constructor() { }
  getToken():string|null{
   return localStorage.getItem(this.TOKEN_KEY)
  }
  saveToken(token:string){
localStorage.setItem(this.TOKEN_KEY,token);

  }
  getUser(){
    return localStorage.getItem(this.USER_KEY)
  }
  saveUser(user:string){
      localStorage.setItem(this.USER_KEY,  JSON.stringify(user));
  }
  logout(){
    localStorage.clear();
  }
}
