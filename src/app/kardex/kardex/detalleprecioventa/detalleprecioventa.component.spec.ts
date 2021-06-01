import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleprecioventaComponent } from './detalleprecioventa.component';

describe('DetalleprecioventaComponent', () => {
  let component: DetalleprecioventaComponent;
  let fixture: ComponentFixture<DetalleprecioventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleprecioventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleprecioventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
