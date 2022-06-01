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
  
}
