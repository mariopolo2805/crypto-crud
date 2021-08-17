import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  exports: [
    LayoutComponent,
  ],
})
export class LayoutModule { }
