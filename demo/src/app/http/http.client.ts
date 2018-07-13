import {Injectable, Inject } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import { SERVICE_CONSTANTS, ServiceConstantsConfig } from '../app.constants';

@Injectable()
export class HttpCaller {
    constructor(private http: Http,@Inject(SERVICE_CONSTANTS) private _serviceConstants: ServiceConstantsConfig){}

    public get(url){
      return this.http.get(this.updateUrl(url))
      .pipe(map((response: any) => response.json()),catchError(this.catchErr));
    }

    public catchErr(error:Response){
        return Observable.throw(error || "Something went wrong");
    }

    public updateUrl(url){
        return this._serviceConstants.apiRootUrl + url;
    }
}
