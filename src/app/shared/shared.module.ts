import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { CryptoLoaderComponent } from './components/loader/loader.component';
import { CryptoService } from './services/crypto.service';

const matModules = [
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
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
  declarations: [
    ...cryptoComponents,
  ],
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
  providers: [
    CryptoService,
  ],
})
export class SharedModule { }
