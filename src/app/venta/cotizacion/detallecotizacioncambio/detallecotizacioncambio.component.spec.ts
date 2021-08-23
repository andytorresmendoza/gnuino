import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecotizacioncambioComponent } from './detallecotizacioncambio.component';

describe('DetallecotizacioncambioComponent', () => {
  let component: DetallecotizacioncambioComponent;
  let fixture: ComponentFixture<DetallecotizacioncambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallecotizacioncambioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecotizacioncambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
