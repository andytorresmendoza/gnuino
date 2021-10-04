import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentadirectareportComponent } from './ventadirectareport.component';

describe('VentadirectareportComponent', () => {
  let component: VentadirectareportComponent;
  let fixture: ComponentFixture<VentadirectareportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentadirectareportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentadirectareportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
