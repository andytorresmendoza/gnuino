import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbancoComponent } from './addbanco.component';

describe('AddbancoComponent', () => {
  let component: AddbancoComponent;
  let fixture: ComponentFixture<AddbancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
