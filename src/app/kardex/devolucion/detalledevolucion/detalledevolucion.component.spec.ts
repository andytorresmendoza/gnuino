import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalledevolucionComponent } from './detalledevolucion.component';

describe('DetalledevolucionComponent', () => {
  let component: DetalledevolucionComponent;
  let fixture: ComponentFixture<DetalledevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalledevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalledevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
