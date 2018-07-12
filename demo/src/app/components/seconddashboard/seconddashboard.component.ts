import { Component, OnInit, OnChanges, Input, SimpleChange} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SharedService } from '../../services/shared.service'; 

@Component({
  selector: 'seconddashboard',
  templateUrl: './seconddashboard.component.html',
  styleUrls: ['./seconddashboard.component.css']
})
export class SeconddashboardComponent implements OnInit, OnChanges {
  @Input('subNav') subNav;
  @Input ('parentNavName') parentNavName;
  constructor(private routes: ActivatedRoute,private _shared:SharedService) { }

  ngOnInit() { }

  ngOnChanges(changes:{[prop:string]:SimpleChange}){
    if(changes.subNav && changes.subNav.currentValue!=undefined){
      this.setSecondNavElements(changes.subNav.currentValue);
    }
    if(changes.parentNavName && changes.parentNavName.currentValue!=undefined){
      this.setParentNavName(changes.parentNavName.currentValue);
    }
  }

  setSecondNavElements(response){
    this.subNav = response;
  }

  setParentNavName(response){
    this.parentNavName =response;
  }

}