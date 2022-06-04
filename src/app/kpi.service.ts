import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  constructor(private http:HttpClient,private sc:TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };
  getCaptureFreq():Observable<any>{
    return this.http.get(environment.kpi+'/setting-management/api/data-capture-frequency');
    
  }
  getReviewFreq():Observable<any>{
    return this.http.get(environment.kpi+'/setting-management/api/data-review-frequency');
  }
  getDepts():Observable<any>{
    return this.http.get(environment.kpi+'/setting-management/api/departments');
  }
  getPerspectives():Observable<any>{
    return this.http.get(environment.kpi+'/setting-management/api/perspectives');
  }
  createKPI(kpi:any){
    return this.http.post(environment.kpi+'/org-goal-management/api/goal',kpi
    ,this.httpOptions)
  }
  getTypes():Observable<any>{
    return this.http.get(environment.kpi+'/setting-management/api/kpi-types');
  }
  getCategory():Observable<any>{
    return this.http.get(environment.kpi+'/setting-management/api/kpi-categories');
  }
  getKPI():Observable<any>{
    return this.http.get(environment.kpi+'/org-goal-management/api/goal/get-kpi-list-given-date-range?start=1648751400000&end=1680287399000&includeViewOnly=true')
  }
  getFY():Observable<any>{
    return this.http.get(environment.kpi+'/setting-management/api/financial-years-list');
  }
  getMonthRAnge():Observable<any>{
    return this.http.get(environment.kpi+'/setting-management/api/month-range')
  }
  getPieData():Observable<any>{
    let queryParams = new HttpParams();

    queryParams=queryParams.append('employeeid','vikas.raut');

    queryParams=queryParams.append('fyStartDate','1648751400000');

    queryParams=queryParams.append('fyEndDate','1680287399000');

    queryParams=queryParams.append('groupby','kpi');

    queryParams=queryParams.append('kpiType','606573e173d7e41e2e59a4b1,606573e173d7e41e2e59a4b0,61ab4d8127d6319a5950235d,61ab4da827d6319a5950235e');

    queryParams=queryParams.append('aggregate','false');

    return this.http.get(environment.kpi+'/org-goal-management/api/kpi/hierarchical-users-kpi-status',{params:queryParams});
  }
  
}
