import { Component } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OrgAdoptionTree';

  /**
   *
   */
  constructor(private sc:TokenStorageService) {
    
  }
  isLoggedIn(){
   return this.sc.getToken();
  }
}
