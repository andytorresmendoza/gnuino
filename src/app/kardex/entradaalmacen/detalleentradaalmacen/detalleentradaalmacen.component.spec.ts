import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleentradaalmacenComponent } from './detalleentradaalmacen.component';

describe('DetalleentradaalmacenComponent', () => {
  let component: DetalleentradaalmacenComponent;
  let fixture: ComponentFixture<DetalleentradaalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleentradaalmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleentradaalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
