import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstadoflujoComponent } from './editar-estadoflujo.component';

describe('EditarEstadoflujoComponent', () => {
  let component: EditarEstadoflujoComponent;
  let fixture: ComponentFixture<EditarEstadoflujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEstadoflujoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstadoflujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
