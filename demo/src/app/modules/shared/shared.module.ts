import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FilterPipe } from '../../pipes/common.pipe';
import {TableModule} from 'primeng/table';
import { InfiniteScrollerDirective } from '../../directives/infinite-scroller.directive';

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [ 
    NavbarComponent,
    FilterPipe,
    InfiniteScrollerDirective
  ],
  exports:[
    NavbarComponent,
    FilterPipe,
    TableModule,
    InfiniteScrollerDirective
  ]
})
export class SharedModule { }
