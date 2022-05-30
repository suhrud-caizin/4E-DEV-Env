import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private sc:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if(!this.sc.getToken()){
      this.router.navigate(['/']);
    }
}

}
