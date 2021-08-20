import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '@core/providers/api.service';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { CryptoService } from '@shared/services/crypto.service';
import { mockApiService, mockCryptoService } from 'src/app/tests/mocks';
import { DetailComponent } from './detail.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { throwError } from 'rxjs/internal/observable/throwError';

registerLocaleData(localeEs, 'es');

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  let cryptoServiceSpy: jasmine.SpyObj<CryptoService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forChild(),
      ],
      declarations: [
        DetailComponent,
      ],
      providers: [
        TranslateStore,
        { provide: CryptoService, useValue: mockCryptoService },
        { provide: ApiService, useValue: mockApiService },
      ]
    })
    .compileComponents();

    cryptoServiceSpy = TestBed.inject(CryptoService) as jasmine.SpyObj<CryptoService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onResize', () => {
    component.onResize();
    if (window.innerWidth >= 640) {
      expect(component.view).toEqual([600, 400]);
    } else {
      expect(component.view).toEqual([window.innerWidth - 40, 300]);
    }
  });

  it('should fail API call and fail', () => {
    cryptoServiceSpy.getCryptoDetail.and.returnValue(throwError({ }));
    component.getCryptoInfo('bitcoin');
    expect(component.cryptoData).toBeNull();
    expect(component.cryptoImage).toBeNull();
    expect(component.dataset).toBeNull();
  });
});
