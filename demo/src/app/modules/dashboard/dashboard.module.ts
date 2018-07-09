import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DashboardRoutingModule} from '../../routing/app.routing';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers:[]
})
export class DashboardModule { }
