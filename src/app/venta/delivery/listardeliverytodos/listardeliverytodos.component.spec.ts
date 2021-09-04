import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListardeliverytodosComponent } from './listardeliverytodos.component';

describe('ListardeliverytodosComponent', () => {
  let component: ListardeliverytodosComponent;
  let fixture: ComponentFixture<ListardeliverytodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListardeliverytodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListardeliverytodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
