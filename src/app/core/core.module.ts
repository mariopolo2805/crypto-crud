import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { ApiService } from './providers/api.service';
import { CryptoTranslateModule } from './translate/translate.module';

const ngModules = [
  BrowserAnimationsModule,
  HttpClientModule,
];

@NgModule({
  imports: [
    SharedModule,
    LayoutModule,
    CryptoTranslateModule,
    ...ngModules,
  ],
  exports: [
    LayoutModule,
    CryptoTranslateModule,
  ],
  providers: [
    ApiService,
  ],
})
export class CoreModule { }
