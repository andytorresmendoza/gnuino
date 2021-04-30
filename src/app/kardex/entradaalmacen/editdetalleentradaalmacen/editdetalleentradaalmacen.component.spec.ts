import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetalleentradaalmacenComponent } from './editdetalleentradaalmacen.component';

describe('EditdetalleentradaalmacenComponent', () => {
  let component: EditdetalleentradaalmacenComponent;
  let fixture: ComponentFixture<EditdetalleentradaalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdetalleentradaalmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdetalleentradaalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
