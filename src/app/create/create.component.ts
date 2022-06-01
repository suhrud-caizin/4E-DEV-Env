import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { KpiService } from '../kpi.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  
  constructor(private sc:TokenStorageService,private router:Router,private ks:KpiService,private fb: FormBuilder) { }
capfreq:any[]=[];
reviewFreq:any[]=[];
dept:any[]=[];
perspectives:any[]=[];
msg='';
  ngOnInit(): void {

      this.ks.getCaptureFreq().subscribe(({response})=>this.capfreq=response);   //this.capfreq=data
      this.ks.getDepts().subscribe(({response})=>this.dept=response);
      this.ks.getReviewFreq().subscribe(({response})=>this.reviewFreq=response);
      this.ks.getPerspectives().subscribe(({response})=>this.perspectives=response);
    setTimeout(() => {
      console.log(this.capfreq);
      console.log(this.perspectives)
    }, 1000);
 
}

kpiForm = this.fb.group({
  title: ['',[Validators.required]],   //Validators.minLength(4)
  departmentId: ['',[Validators.required]],    //Validators.minLength(4)
  dataCaptureFrequency:['',[Validators.required]],
  reviewFrequency:['',[Validators.required]],
  goalDescription:[''],
  perspective:['',[Validators.required]],
  remark:[''],
  annualTarget: 100,
    actionLimit: "MANUAL",	
    category: "5ea2c50f1d4ec94491c08030",
    isTypeKPI: true,
    type: "606573e173d7e41e2e59a4b0",
    
    parentId: null,
    perspectivePrefix: "I",
    directionOfGoodness: "Up",
    ytdCalculation: "SUM",
    weightage: 1,
    captureData: [
        [{
            target: 0,
            lower: 0,
            upper: 0,
            startDate: "2022-05-01T00:00:00",
            endDate: "2022-05-31T23:59:59",
            indicator: 2,
            disabled: false,
            upperValueType: "ABSOLUTE",
            lowerValueType: "ABSOLUTE"
        }]
    ],
    unitOfMeasurement: "606573e173d7e41e2e59a4ab",
    goalFormula: null,
    isActive: true,
    owners: {
        individuals: [
            {
                employeeId: "vikas.raut",
                isPrimary: true
            }
        ]
    },
    viewers: {
        individuals: [],
        groups: []
    },
    financialYearStart: 1648751400000,
    financialYearEnd: 1680287399000,
    dataAggregationFrequency: "62833d7b412ac9eebe3a3c17",
    dataAggregationMethod: "SUM"
});
onSubmit(){
  console.log(this.kpiForm.value)
  this.ks.createKPI( JSON.stringify(this.kpiForm.value)).subscribe(()=>this.msg='KPI created Successfully!',()=>this.msg='Ooops! some error!')
  setTimeout(() => {
    this.msg=''
  }, 2000);
}
get title() { return this.kpiForm.get('title'); }
get departmentId() { return this.kpiForm.get('departmentId'); }
get dataCaptureFrequency() { return this.kpiForm.get('dataCaptureFrequency'); }
get reviewFrequency() { return this.kpiForm.get('reviewFrequency'); }




}
