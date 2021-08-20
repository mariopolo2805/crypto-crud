import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '@core/providers/api.service';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { CryptoDetailModel } from '@shared/models/crypto.model';
import { CryptoService } from '@shared/services/crypto.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { mockApiService } from 'src/app/tests/mocks';
import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

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
        CryptoService,
        TranslateStore,
        { provide: ApiService, useValue: mockApiService },
      ]
    })
    .compileComponents();
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
});
