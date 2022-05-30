import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private sc:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
      this.sc.logout();
      this.router.navigate(['/']);
  }

}
