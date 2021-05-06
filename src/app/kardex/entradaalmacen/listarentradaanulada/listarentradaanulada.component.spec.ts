import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarentradaanuladaComponent } from './listarentradaanulada.component';

describe('ListarentradaanuladaComponent', () => {
  let component: ListarentradaanuladaComponent;
  let fixture: ComponentFixture<ListarentradaanuladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarentradaanuladaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarentradaanuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
