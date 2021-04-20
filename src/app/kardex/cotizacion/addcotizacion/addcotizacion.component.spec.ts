import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcotizacionComponent } from './addcotizacion.component';

describe('AddcotizacionComponent', () => {
  let component: AddcotizacionComponent;
  let fixture: ComponentFixture<AddcotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
