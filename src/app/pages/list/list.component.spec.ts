import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '@core/providers/api.service';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { CryptoService } from '@shared/services/crypto.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { mockApiService, mockCryptoService } from 'src/app/tests/mocks';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  let cryptoServiceSpy: jasmine.SpyObj<CryptoService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forChild(),
      ],
      declarations: [
        ListComponent,
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
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should destroy', () => {
    expect(component.ngOnDestroy).toBeTruthy();
  });

  it('should fail API call and fail', () => {
    cryptoServiceSpy.getCryptoList.and.returnValue(throwError({ }));
    component.getCryptoList();
    expect(component.cryptoList).toBeNull();
  });
});
