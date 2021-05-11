import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevolucionComponent } from './adddevolucion.component';

describe('AdddevolucionComponent', () => {
  let component: AdddevolucionComponent;
  let fixture: ComponentFixture<AdddevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
