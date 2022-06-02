import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  kpi:any;
  ngOnInit(): void {
  }
  setKPI($event:any){
    this.kpi=$event
    console.log($event);
  }

}
