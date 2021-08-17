/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtecLoaderComponent } from './loader.component';
import { SharedModule } from '@shared/shared.module';

describe('ProtecLoaderComponent', () => {
  let component: ProtecLoaderComponent;
  let fixture: ComponentFixture<ProtecLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ProtecLoaderComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProtecLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
