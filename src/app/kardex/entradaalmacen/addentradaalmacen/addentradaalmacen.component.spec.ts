import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddentradaalmacenComponent } from './addentradaalmacen.component';

describe('AddentradaalmacenComponent', () => {
  let component: AddentradaalmacenComponent;
  let fixture: ComponentFixture<AddentradaalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddentradaalmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddentradaalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
