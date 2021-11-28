import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionventaComponent } from './devolucionventa.component';

describe('DevolucionventaComponent', () => {
  let component: DevolucionventaComponent;
  let fixture: ComponentFixture<DevolucionventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolucionventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
