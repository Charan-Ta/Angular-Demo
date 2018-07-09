import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SharedService } from '../../services/shared.service'; 

@Component({
  selector: 'app-seconddashboard',
  templateUrl: './seconddashboard.component.html',
  styleUrls: ['./seconddashboard.component.css']
})
export class SeconddashboardComponent implements OnInit {
  public name1;
  public name2;
  constructor(private routes: ActivatedRoute,private _shared:SharedService) { }

  ngOnInit() {
    this.name1 = this._shared.getUsername();
    console.log(this.name1);
    this.routes.queryParams.subscribe(res=>{
      this.name2 = res;
    });
  }

}

//1. ngOnChanges 
//2. ngOnInit
//3. 