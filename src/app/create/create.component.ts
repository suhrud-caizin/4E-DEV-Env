import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private sc:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if(!this.sc.getToken()){
      this.router.navigate(['/']);
    }
}


}
