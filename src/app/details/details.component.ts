import { Component, OnInit } from '@angular/core';
import { KpiService } from '../kpi.service';

 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string | null='';

  kpi:any={};
  constructor(private ks:KpiService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
   this.id=this.ar.snapshot.paramMap.get("id");
   this.ks.getKPI().subscribe(({response})=>{
     this.kpi=response.find((elem: { _id: string | null; })=>elem._id==this.id)
   })
    console.log(this.kpi)
  }

}
