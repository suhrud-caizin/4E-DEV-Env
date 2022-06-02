import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };
  getCaptureFreq():Observable<any>{
    return this.http.get('https://dev-api.tqmi.io/setting-management/api/data-capture-frequency');
    
  }
  getReviewFreq():Observable<any>{
    return this.http.get('https://dev-api.tqmi.io/setting-management/api/data-review-frequency');
  }
  getDepts():Observable<any>{
    return this.http.get('https://dev-api.tqmi.io/setting-management/api/departments');
  }
  getPerspectives():Observable<any>{
    return this.http.get('https://dev-api.tqmi.io/setting-management/api/perspectives');
  }
  createKPI(kpi:any){
    return this.http.post('https://dev-api.tqmi.io/org-goal-management/api/goal',kpi
    ,this.httpOptions)
  }
  getTypes():Observable<any>{
    return this.http.get('https://dev-api.tqmi.io/setting-management/api/kpi-types');
  }
  getCategory():Observable<any>{
    return this.http.get('https://dev-api.tqmi.io/setting-management/api/kpi-categories');
  }
  getKPI():Observable<any>{
    return this.http.get('https://dev-api.tqmi.io/org-goal-management/api/goal/get-kpi-list-given-date-range?start=1648751400000&end=1680287399000&includeViewOnly=true')
  }
  getFY():Observable<any>{
    return this.http.get('https://dev-api.tqmi.io/setting-management/api/financial-years-list');
  }
  getMonthRAnge():Observable<any>{
    return this.http.get('https://dev-api.tqmi.io/setting-management/api/month-range')
  }
  
}
