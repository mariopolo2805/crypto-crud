import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'crypto-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  toggleLanguage(language: string): void {
    this.translateService.use(language);
  }

}
