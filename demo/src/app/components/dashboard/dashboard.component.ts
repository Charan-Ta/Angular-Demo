import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SharedService } from '../../services/shared.service'; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public name:string;
  constructor(private router: Router, private _shared:SharedService) { }

  ngOnInit() {
  }

  goToSecondDash(){
    this._shared.setUsername(name);
    this.router.navigate(['/seconddashboard'],{queryParams:{'username':this.name}});
  }

}
