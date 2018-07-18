import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FilterPipe } from '../../pipes/common.pipe';
import {TableModule} from 'primeng/table';
@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [ 
    NavbarComponent,
    FilterPipe
  ],
  exports:[
    NavbarComponent,
    FilterPipe,
    TableModule
  ]
})
export class SharedModule { }
