import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesalidaproductoComponent } from './detallesalidaproducto.component';

describe('DetallesalidaproductoComponent', () => {
  let component: DetallesalidaproductoComponent;
  let fixture: ComponentFixture<DetallesalidaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesalidaproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesalidaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
