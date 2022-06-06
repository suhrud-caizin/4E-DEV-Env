import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KpiService } from '../kpi.service';
import { TokenStorageService } from '../token-storage.service';
import {NestedTreeControl} from '@angular/cdk/tree';

import {MatTreeNestedDataSource} from '@angular/material/tree';


interface FoodNode {
  primaryUserId: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-orgtree',
  templateUrl: './orgtree.component.html',
  styleUrls: ['./orgtree.component.css']
})
export class OrgtreeComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  constructor(private sc:TokenStorageService,private router:Router,private ks:KpiService) { 

  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length >= 0;
pieData:any[]=[]
TREE_DATA:any[]=[]

ngOnInit(): void {

  this.ks.getPieData().subscribe(({response})=>{
    // response[5].userHierarchy='ameya.gholap/vikas.raut';

    // response[4].userHierarchy='ameya.gholap'

    // response[4].primaryUserId='ameya.gholap'
      this.TREE_DATA=  this.getTree(response);
      this.dataSource.data = this.TREE_DATA;
      console.log(this.TREE_DATA)
      
    })
    console.log(this.dataSource.data)
    console.log('******')
}

// meth(){
//   console.log(this.getTree(this.pieData))
// }



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
