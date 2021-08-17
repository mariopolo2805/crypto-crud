import { HttpClient, HttpBackend } from '@angular/common/http';
import { NgModule, Injectable } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable()
export class HttpClientTrans extends HttpClient {
  constructor(handler: HttpBackend) {
    super(handler);
  }
}

// AoT requires an exported function for factories
// eslint-disable-next-line @typescript-eslint/naming-convention
const HttpLoaderFactory = (http: HttpClientTrans): TranslateHttpLoader =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClientTrans],
      },
    }),
  ],
  providers: [
    HttpClientTrans,
  ],
  exports: [
    TranslateModule,
  ],
})
export class CryptoTranslateModule { }
