import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListardevolucionComponent } from './listardevolucion.component';

describe('ListardevolucionComponent', () => {
  let component: ListardevolucionComponent;
  let fixture: ComponentFixture<ListardevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListardevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListardevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
