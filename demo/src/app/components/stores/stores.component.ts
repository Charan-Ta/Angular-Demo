import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  public parameters;
  public datasource=[];
  public storesData=[];
  public cols;
  public loading;
  public updatedParams;
  constructor(private _dashboardService: DashboardService, private _route:ActivatedRoute, private _changeDetectorRef:ChangeDetectorRef, private _router:Router) { }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    this._changeDetectorRef.detectChanges();
  }
  
  public getRouteParams(){
    this._route.queryParams.subscribe(params=>{
      this.parameters = params;
    });
  }

  public loadDataOnScroll(event:any){
    this.loading = true;
    this.getRouteParams();
    //backend call imitation. make real backend call here with query params.
    setTimeout(() => {
      this.loading = false;
      this._dashboardService.GetStoresData().subscribe(res=>{
        this.datasource=res;
        this.cols = Object.keys(this.datasource[0]);
        this.storesData=this.storesData.concat(this.datasource.slice(this.parameters['startFrom'],Number(this.parameters['limit'])+Number(this.parameters['startFrom'])));
        //update query parameters
        let startFrom = Number(this.parameters['startFrom']);
        startFrom += Number(this.parameters['limit']);
        this.updatedParams = {limit:'10',sortBy:'StoreName',sortDir:'asc',startFrom:startFrom};
        if(startFrom<=this.datasource.length)
        this._router.navigate([],{queryParams:this.updatedParams});
      });
      }, 250);
  }

}
