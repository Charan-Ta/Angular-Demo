import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//routing
import {AppRoutingModule } from './routing/app.routing';
//import { SeconddashboardComponent } from './components/seconddashboard/seconddashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    //SeconddashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
