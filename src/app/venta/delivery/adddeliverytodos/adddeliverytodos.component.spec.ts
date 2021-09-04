import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeliverytodosComponent } from './adddeliverytodos.component';

describe('AdddeliverytodosComponent', () => {
  let component: AdddeliverytodosComponent;
  let fixture: ComponentFixture<AdddeliverytodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddeliverytodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeliverytodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
