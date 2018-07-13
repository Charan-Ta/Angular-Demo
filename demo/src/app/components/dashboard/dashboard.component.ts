import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { DashboardService } from '../../services/dashboard.service'; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
  providers: [RouterLink, RouterOutlet]
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private _shared:SharedService, private _dashboardService:DashboardService) { }

  ngOnInit() {
    this.attachDataListener();
  }

  public attachDataListener(){
  }
}
