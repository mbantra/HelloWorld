import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { IGreeting } from './IGreeting';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';

@Injectable()
export class GreetingService {

  private url = 'http://localhost:8080/greeting/';
  constructor(private _http: HttpClient) 
  {
  }

   getGreeting()
   {
    return this._http.get<IGreeting>(this.url)
    .map(greeting => greeting as IGreeting);
   }

   getGreetingByName(name : String)
   {
    return this._http.get<IGreeting>(this.url + '?name=' + name)
    .map(greeting => greeting as IGreeting);
   }

   createGreeting(ge:IGreeting): Observable<any>
   {
    return this._http.post(this.url, ge)
               .map(this.extractData)
               .catch(this.handleErrorObservable);
   }

   private extractData(res: Response) {
     console.log(res.status);
          return res || {};
      }
     private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }

}