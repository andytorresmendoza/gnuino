import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstadoflujoComponent } from './listar-estadoflujo.component';

describe('ListarEstadoflujoComponent', () => {
  let component: ListarEstadoflujoComponent;
  let fixture: ComponentFixture<ListarEstadoflujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEstadoflujoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstadoflujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
