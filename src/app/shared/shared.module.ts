import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { CryptoLoaderComponent } from './components/loader/loader.component';

const matModules = [
  MatProgressSpinnerModule,
];

const cryptoComponents = [
  CryptoLoaderComponent,
];

const ngModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [
    TranslateModule.forChild(),
    ...ngModules,
    ...matModules,
  ],
  exports: [
    ...ngModules,
    ...matModules,
    ...cryptoComponents,
  ],
  declarations: [
    ...cryptoComponents,
  ],
})
export class SharedModule { }
