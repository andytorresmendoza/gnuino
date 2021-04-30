import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalmacenComponent } from './addalmacen.component';

describe('AddalmacenComponent', () => {
  let component: AddalmacenComponent;
  let fixture: ComponentFixture<AddalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddalmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
