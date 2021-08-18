import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list.routing';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
  ],
  declarations: [ListComponent],
})
export class ListModule { }
