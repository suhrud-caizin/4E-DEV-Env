import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KpiService } from '../kpi.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-orgtree',
  templateUrl: './orgtree.component.html',
  styleUrls: ['./orgtree.component.css']
})
export class OrgtreeComponent implements OnInit {

  constructor(private sc:TokenStorageService,private router:Router,private ks:KpiService) { }
pieData:any[]=[]

ngOnInit(): void {

  this.ks.getPieData().subscribe(({response})=>{

    this.pieData=response;

  })

}

meth(){
  console.log(this.getTree(this.pieData))
}



getTree(data:any[]){
  let res:any[]=[];
let map=new Map<string,number>();
  for (let i = 0; i < data.length; i++) {
    map.set(data[i].primaryUserId,i);
    data[i].children=[];
  }
  for (let i = 0; i < data.length; i++) {
    let node=data[i]
    if(data[i].userHierarchy.split('/').length!=1){
     let temp:any= node.userHierarchy.split('/')
   
    let len=temp[temp.length-2]
    console.log(len)
    let a=map.get(len);
      if(a)
      data[a].children.push(node)
   
      
    }
    else{
      console.log('inside else')
res.push(node)
    }
  }
return res;
}

}
