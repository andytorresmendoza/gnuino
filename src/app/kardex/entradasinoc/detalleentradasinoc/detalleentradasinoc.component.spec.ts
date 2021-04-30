import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleentradasinocComponent } from './detalleentradasinoc.component';

describe('DetalleentradasinocComponent', () => {
  let component: DetalleentradasinocComponent;
  let fixture: ComponentFixture<DetalleentradasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleentradasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleentradasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
