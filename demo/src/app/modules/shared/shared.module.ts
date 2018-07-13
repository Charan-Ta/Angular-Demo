import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FilterPipe } from '../../pipes/common.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    NavbarComponent,
    FilterPipe
  ],
  exports:[
    NavbarComponent,
    FilterPipe
  ]
})
export class SharedModule { }
