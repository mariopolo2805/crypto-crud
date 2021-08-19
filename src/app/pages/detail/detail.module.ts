import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DetailRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [DetailComponent],
})
export class DetailModule { }
