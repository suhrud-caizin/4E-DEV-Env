import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { KpiService } from '../kpi.service';
import { TokenStorageService } from '../token-storage.service';
import { NgSelectModule } from "@ng-select/ng-select";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(private sc: TokenStorageService, private router: Router, private ks: KpiService, private fb: FormBuilder) { }
  capfreq: any[] = [];
  reviewFreq: any[] = [];
  dept: any[] = [];
  perspectives: any[] = [];
  type: any[] = [];
  category: any[] = [];
  // months:any[]=['JAN',"FEB","MAR","APR"]
  state: any[] = []
  months: any[] = [
    { id: 1, name: "JAN" },
    { id: 2, name: "FEB" },
    { id: 3, name: "MAR" },
    { id: 4, name: "APR" },
    { id: 5, name: "MAY" },
  ];

  selected: any[] = [];
  msg = '';
  FY: any[] = [];
  monthlyRange: any[] = [];
  ngOnInit(): void {

    this.ks.getCaptureFreq().subscribe(({ response }) => this.capfreq = response);   //this.capfreq=data
    this.ks.getDepts().subscribe(({ response }) => this.dept = response);
    this.ks.getReviewFreq().subscribe(({ response }) => this.reviewFreq = response);
    this.ks.getPerspectives().subscribe(({ response }) => this.perspectives = response);
    this.ks.getTypes().subscribe(({ response }) => this.type = response);
    this.ks.getCategory().subscribe(({ response }) => this.category = response);
    this.ks.getFY().subscribe(({ response }) => this.FY = response);
    this.ks.getMonthRAnge().subscribe(({ response }) => {console.log(this.monthlyRange);this.monthlyRange = response});
   

  }

  kpiForm = this.fb.group({
    title: ['', [Validators.required]],   //Validators.minLength(4)
    departmentId: ['', [Validators.required]],    //Validators.minLength(4)
    dataCaptureFrequency: ['', [Validators.required]],
    reviewFrequency: ['', [Validators.required]],
    goalDescription: [''],
    perspective: ['', [Validators.required]],
    remark: [''],
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
    captureData: this.fb.array([

    ]),
    unitOfMeasurement: "606573e173d7e41e2e59a4ab",
    goalFormula: null,
    isActive: true,
    owners: {
      individuals: [
        {
          employeeId: "suhrud.mhatre",
          isPrimary: true
        }
      ]
    },
    viewers: {
      individuals: [],
      groups: []
    },
    financialYearStart: null,
    financialYearEnd: null,
    dataAggregationFrequency: "62833d7b412ac9eebe3a3c17",
    dataAggregationMethod: "SUM",


  });
  onSubmit() {
    console.log(this.kpiForm.value)
    this.ks.createKPI(JSON.stringify(this.kpiForm.value)).subscribe(() => this.msg = 'KPI created Successfully!', () => this.msg = 'Ooops! some error!')
    setTimeout(() => {
      this.msg = ''
    }, 2000);
  }
  changeHandler($event: any) {
    console.log($event.target.value);
    let tmp = this.capfreq.find(elem => elem._id == $event.target.value);
    console.log(tmp.order)
    this.reviewFreq = this.reviewFreq.filter(elem => elem.order > tmp.order)
    console.log(this.reviewFreq)
  }
  addData($event: any) {
    console.log(this.selected)
    this.captureData.push(
      this.createData($event.id)
    );
    console.log(this.kpiForm.value)
  }
  removeData(i?: any) {
    console.log(i);
    console.log('data removed')

    this.captureData.removeAt(i);
    this.selected.splice(i, 1);
    // this.captureData
  }
  createData(indicator: any): FormGroup {
    console.log(this.captureData.value)
    let temp = this.monthlyRange.find(({ startUnix }) => new Date(startUnix).getMonth() + 1 == indicator);

    return this.fb.group({
      target: [null, Validators.required],
      lower: [null, Validators.required],
      upper: [null, Validators.required],
      startDate: [temp.start + "T00:00:00"],
      endDate: [temp.end + "T23:59:59"],
      indicator: [indicator],
      disabled: [false],
      upperValueType: ["ABSOLUTE"],
      lowerValueType: ["ABSOLUTE"]
    })

  }
  fyChangeHandler() {
    // console.log(new Date().getTime())
    // console.log('********')
    // console.log(startUnix)
    
    this.kpiForm.controls['financialYearStart'].setValue(new Date().getTime().toString());
    console.log(this.kpiForm.value)
  }
  getFilteredFY() {
    return this.FY.filter(elem => new Date(elem.startUnix).getFullYear() >= new Date().getFullYear())
  }


  get title() { return this.kpiForm.get('title'); }
  get departmentId() { return this.kpiForm.get('departmentId'); }
  get dataCaptureFrequency() { return this.kpiForm.get('dataCaptureFrequency'); }
  get reviewFrequency() { return this.kpiForm.get('reviewFrequency'); }
  get captureData() {
    return this.kpiForm.get('captureData') as FormArray;
  }



}

/**
 * 
 * 
 * 
 * 
 *  [{
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
 */