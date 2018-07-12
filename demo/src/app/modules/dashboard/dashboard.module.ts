import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardRoutingModule} from '../../routing/app.routing';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import {SeconddashboardComponent} from '../../components/seconddashboard/seconddashboard.component';
import { FilterPipe } from '../../pipes/common.pipe';

import { DashboardService } from '../../services/dashboard.service';
import { HttpModule } from '@angular/http';

import { HttpCaller } from '../../http/http.client';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpModule
  ],
  declarations: [
    DashboardComponent,
    SeconddashboardComponent,
    FilterPipe
  ],
  providers:[HttpCaller,DashboardService]
})
export class DashboardModule { }
