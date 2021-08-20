import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoLoaderComponent } from './loader.component';
import { SharedModule } from '@shared/shared.module';

describe('CryptoLoaderComponent', () => {
  let component: CryptoLoaderComponent;
  let fixture: ComponentFixture<CryptoLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CryptoLoaderComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CryptoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
