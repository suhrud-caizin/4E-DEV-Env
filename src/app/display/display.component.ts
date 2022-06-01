import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { KpiService } from '../kpi.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private sc:TokenStorageService,private router:Router,private as:AuthService,private ks:KpiService) { }
kpis:any[]=[]
  ngOnInit(): void {
    this.ks.getKPI().subscribe(({response})=> this.kpis=response);
    setTimeout(() => {
      console.log(this.kpis);
    }, 2000);
    
}

}
