import { Injectable, Inject } from '@angular/core';
import { SERVICE_CONSTANTS, ServiceConstantsConfig } from '../app.constants';
import {HttpCaller} from '../http/http.client';
import {Http} from '@angular/http';
@Injectable()
export class DashboardService {

  constructor(private _http:HttpCaller,@Inject(SERVICE_CONSTANTS) public _ServiceConstants?:ServiceConstantsConfig) { }

  public GetSecondNavElements(){
    const url = this._ServiceConstants.API['SecondNav'];
    return this._http.get(url);
  }

  public GetStoresData(parameters){
    const data = parameters;
    const url = this._ServiceConstants.API['Stores'];
    return this._http.get(url);
  }
}
