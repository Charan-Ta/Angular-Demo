import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardRoutingModule} from '../../routing/app.routing';
import {SeconddashboardComponent} from '../../components/seconddashboard/seconddashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    SeconddashboardComponent
  ]
})
export class SeconddashboardModule { }
