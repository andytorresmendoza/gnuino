import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistapreviacotizacionComponent } from './vistapreviacotizacion.component';

describe('VistapreviacotizacionComponent', () => {
  let component: VistapreviacotizacionComponent;
  let fixture: ComponentFixture<VistapreviacotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistapreviacotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistapreviacotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
