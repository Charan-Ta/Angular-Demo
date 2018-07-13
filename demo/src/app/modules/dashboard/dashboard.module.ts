import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import {DashboardRoutingModule} from '../../routing/app.routing';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { InboxComponent } from '../../components/inbox/inbox.component';
import { MerchandiseComponent } from '../../components/merchandise/merchandise.component';


import { DashboardService } from '../../services/dashboard.service';
import { HttpModule } from '@angular/http';

import { HttpCaller } from '../../http/http.client';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpModule
  ],
  declarations: [
    DashboardComponent,
    InboxComponent,
    MerchandiseComponent
  ],
  providers:[HttpCaller,DashboardService]
})
export class DashboardModule { }
