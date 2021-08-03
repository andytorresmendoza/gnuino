import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleventadirectaComponent } from './detalleventadirecta.component';

describe('DetalleventadirectaComponent', () => {
  let component: DetalleventadirectaComponent;
  let fixture: ComponentFixture<DetalleventadirectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleventadirectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleventadirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
