import { Component, OnInit, ChangeDetectorRef, Renderer } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {ActivatedRoute,Router} from '@angular/router';
declare var $: any;
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
  public start;
  public pressed;
  public startX;
  startWidth ;

  constructor(private renderer:Renderer,private _dashboardService: DashboardService, private _route:ActivatedRoute, private _changeDetectorRef:ChangeDetectorRef, private _router:Router) { 
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

  private onMouseDown(event){
  this.start = event.target;
  this.pressed = true;
  this.startX = event.x;
  this.startWidth = $(this.start).parent().width();
  this.initResizableColumns();
  }

  private initResizableColumns() {
     this.renderer.listenGlobal('body', 'mousemove', (event) => {
        if(this.pressed) {
           let width = this.startWidth + (event.x - this.startX);
           $(this.start).parent().css({'min-width': width, 'max-width': width});
           let index = $(this.start).parent().index() + 1;
           $('.table-body tr td:nth-child(' + index + ')').css({'min-width': width, 'max-width': width});
        }
     });
     this.renderer.listenGlobal('body', 'mouseup', (event) => {
     if(this.pressed) {
         this.pressed = false;
     }
   });
}

}
