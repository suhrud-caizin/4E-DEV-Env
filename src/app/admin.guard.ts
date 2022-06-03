import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  /**
   *
   */
  constructor(private sc:TokenStorageService,private router:Router) {

    

  }
  sub=new Subject<boolean>();
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.sc.isAdmin()){

       return true
      }
      
        this.router.navigate(['/home']);
      
      return false
  }
  
}
