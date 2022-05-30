import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {
 TOKEN_HEADER_KEY=''
  constructor(private sc:TokenStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.sc.getToken();
    let newrequest=request;
    console.log('intercepted!');
    if(token){

      newrequest= request.clone({headers:request.headers.set(this.TOKEN_HEADER_KEY, 'Bearer ' + token) })
    }
    return next.handle(newrequest);
  }
}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor, multi: true },
];
