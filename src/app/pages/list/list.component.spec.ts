import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '@core/providers/api.service';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { CryptoService } from '@shared/services/crypto.service';
import { mockApiService } from 'src/app/tests/mocks';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forChild(),
      ],
      declarations: [
        ListComponent,
      ],
      providers: [
        CryptoService,
        TranslateStore,
        { provide: ApiService, useValue: mockApiService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
