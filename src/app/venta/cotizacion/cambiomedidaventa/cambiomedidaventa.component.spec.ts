import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiomedidaventaComponent } from './cambiomedidaventa.component';

describe('CambiomedidaventaComponent', () => {
  let component: CambiomedidaventaComponent;
  let fixture: ComponentFixture<CambiomedidaventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiomedidaventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiomedidaventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
