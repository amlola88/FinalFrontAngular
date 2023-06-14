import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionalComponent } from './institucional.component';

describe('InstitucionalComponent', () => {
  let component: InstitucionalComponent;
  let fixture: ComponentFixture<InstitucionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitucionalComponent]
    });
    fixture = TestBed.createComponent(InstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
