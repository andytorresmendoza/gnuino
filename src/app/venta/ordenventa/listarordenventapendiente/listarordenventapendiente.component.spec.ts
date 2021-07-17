import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarordenventapendienteComponent } from './listarordenventapendiente.component';

describe('ListarordenventapendienteComponent', () => {
  let component: ListarordenventapendienteComponent;
  let fixture: ComponentFixture<ListarordenventapendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarordenventapendienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarordenventapendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
