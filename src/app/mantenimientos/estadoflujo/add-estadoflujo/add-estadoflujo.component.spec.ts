import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstadoflujoComponent } from './add-estadoflujo.component';

describe('AddEstadoflujoComponent', () => {
  let component: AddEstadoflujoComponent;
  let fixture: ComponentFixture<AddEstadoflujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEstadoflujoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstadoflujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
