import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingresoalmacenComponent } from './editingresoalmacen.component';

describe('EditingresoalmacenComponent', () => {
  let component: EditingresoalmacenComponent;
  let fixture: ComponentFixture<EditingresoalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingresoalmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingresoalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
