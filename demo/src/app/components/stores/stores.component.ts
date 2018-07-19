import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  public storesData=[];
  public scrollCallback;
  public parameters;
  public cols;
  constructor(private _dashboardService: DashboardService, private _route:ActivatedRoute, private _changeDetectorRef:ChangeDetectorRef, private _router:Router) { 
   this.scrollCallback = this.getStoreDetails.bind(this);
  }

  ngOnInit() {
    this.getRouteParams();
  }
  
  public getRouteParams(){
    this._route.queryParams.subscribe(params=>{
      this.parameters = params;
      this.attachDataListener();
    });
  }

  public attachDataListener(){
    this._dashboardService.GetStoresData(this.parameters).subscribe(res=>{
      this.cols=Object.keys(res[0]);
      this.storesData=res;
    });
  }

  public getStoreDetails(){
     return this._dashboardService.GetStoresData(this.parameters).do(this.processData);
  }

   private processData = (datasource) => {
        this.storesData = this.storesData.concat(datasource);
     // //update parameters and the route and then send to the backend here
     //    this.parameters = {limit:10,sortBy:'StoreName',sortDir:'asc',startFrom:Number(this.parameters['limit'])+Number(this.parameters['startFrom'])};
     //    this._router.navigate([],{queryParams:this.parameters});
  }

}
