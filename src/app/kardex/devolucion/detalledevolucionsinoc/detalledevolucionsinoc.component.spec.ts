import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalledevolucionsinocComponent } from './detalledevolucionsinoc.component';

describe('DetalledevolucionsinocComponent', () => {
  let component: DetalledevolucionsinocComponent;
  let fixture: ComponentFixture<DetalledevolucionsinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalledevolucionsinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalledevolucionsinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
