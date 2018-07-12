import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { DashboardService } from '../../services/dashboard.service'; 
@Component({
  selector: 'app-dashboard',
  host: {
    '(document:click)':'onClick($event)',
  },
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //public name:string;
  public elements: Array<string> = ['Storefront Operations','Inbox','Stores','Merchandise','Admin','Reports'];
  public dropdownElements: Array<string> = ['Help','Logout'];
  public elements1: Array<string> =['\u25BE','SFO Superadmin','\u002B'];
  public subNav;
  public parentNavName:string="Inbox";
  public showDropDown = false;
  constructor(private router: Router, private _shared:SharedService, private _dashboardService:DashboardService) { }

  ngOnInit() {
    this.attachDataListener();
  }

  public attachDataListener(){
    this._dashboardService.GetSecondNavElements().subscribe(res=>{
      if(res.resultCode="C001"){
        this.subNav = res.data;
      }
    })
  }

  public updateSecondNav(parentNavName){
    this.parentNavName=parentNavName;
    this.attachDataListener();
  }

  public onClick(event){
    if(!event.target.classList.contains("dropbtn")){
      this.showDropDown=false;
    }
  }

  public showDropDownFunction(i){
    if(i==0)
    this.showDropDown= true;
  }



}
