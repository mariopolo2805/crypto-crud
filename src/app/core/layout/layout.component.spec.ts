import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forChild(),
      ],
      declarations: [
        LayoutComponent
      ],
      providers: [
        TranslateStore,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggleLanguage', () => {
    component.toggleLanguage('es');
    expect(component).toBeTruthy();
  });
});
