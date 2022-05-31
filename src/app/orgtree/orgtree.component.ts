import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-orgtree',
  templateUrl: './orgtree.component.html',
  styleUrls: ['./orgtree.component.css']
})
export class OrgtreeComponent implements OnInit {

  constructor(private sc:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if(!this.sc.getToken()){
      this.router.navigate(['/']);
    }
}

}
