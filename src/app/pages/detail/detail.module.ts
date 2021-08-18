import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail.routing';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
  ],
  declarations: [DetailComponent],
})
export class DetailModule { }
