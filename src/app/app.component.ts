import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'crypto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'crypto-crud';

  constructor(translateService: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('es');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // change to set apropiate lang in each project
    translateService.use('es');
  }
}
