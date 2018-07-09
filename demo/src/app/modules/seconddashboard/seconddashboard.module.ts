import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SecondDashboardRoutingModule} from '../../routing/app.routing';
import {SeconddashboardComponent} from '../../components/seconddashboard/seconddashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SecondDashboardRoutingModule
  ],
  declarations: [
    SeconddashboardComponent
  ],
  providers:[]
})
export class SeconddashboardModule { }
