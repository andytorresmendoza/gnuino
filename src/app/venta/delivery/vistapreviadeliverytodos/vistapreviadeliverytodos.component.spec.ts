import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistapreviadeliverytodosComponent } from './vistapreviadeliverytodos.component';

describe('VistapreviadeliverytodosComponent', () => {
  let component: VistapreviadeliverytodosComponent;
  let fixture: ComponentFixture<VistapreviadeliverytodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistapreviadeliverytodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistapreviadeliverytodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
