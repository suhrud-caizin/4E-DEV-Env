import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  TOKEN_KEY = 'auth-token';
  USER_KEY = 'auth-user';
  constructor() { }
  getToken(): string | null {
    let tmp = localStorage.getItem(this.TOKEN_KEY);
    if (tmp ) {         //&& !this.isTokenExpired(tmp)
      return tmp
    }
    return null;
  }
  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);

  }
  getUser() {
    return localStorage.getItem(this.USER_KEY)
  }
  saveUser(user: string) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  logout() {
    localStorage.clear();
  }
  isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
