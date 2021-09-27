import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosdetalleComponent } from './movimientosdetalle.component';

describe('MovimientosdetalleComponent', () => {
  let component: MovimientosdetalleComponent;
  let fixture: ComponentFixture<MovimientosdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimientosdetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
