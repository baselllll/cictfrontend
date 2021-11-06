import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CictserviceService {

  constructor(private _HttpClient: HttpClient) {  }

  getAvailableJobs = () => {
    return this._HttpClient.post("http://127.0.0.1:8000/api/employee/getJobs",{
      "status": "Avaliable"
    });
  }
  addinfopersonnal = (data:any) => {
    return this._HttpClient.post("http://127.0.0.1:8000/api/employee/register",data);
  }
  loginemployee(email:any){
    return this._HttpClient.post("http://127.0.0.1:8000/api/employee/login",{email:email});
  }
}
