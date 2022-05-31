import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private sc:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if(!this.sc.isAdmin()){
this.router.navigate(['/unauth']);
    }
  }

}
