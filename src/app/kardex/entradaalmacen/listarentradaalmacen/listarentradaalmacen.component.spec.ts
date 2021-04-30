import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarentradaalmacenComponent } from './listarentradaalmacen.component';

describe('ListarentradaalmacenComponent', () => {
  let component: ListarentradaalmacenComponent;
  let fixture: ComponentFixture<ListarentradaalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarentradaalmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarentradaalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
