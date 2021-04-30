import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaralmacenComponent } from './editaralmacen.component';

describe('EditaralmacenComponent', () => {
  let component: EditaralmacenComponent;
  let fixture: ComponentFixture<EditaralmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaralmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaralmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
