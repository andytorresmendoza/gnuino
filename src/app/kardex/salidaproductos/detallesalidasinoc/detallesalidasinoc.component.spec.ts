import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesalidasinocComponent } from './detallesalidasinoc.component';

describe('DetallesalidasinocComponent', () => {
  let component: DetallesalidasinocComponent;
  let fixture: ComponentFixture<DetallesalidasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesalidasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesalidasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
