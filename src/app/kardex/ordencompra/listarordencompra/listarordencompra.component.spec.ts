import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarordencompraComponent } from './listarordencompra.component';

describe('ListarordencompraComponent', () => {
  let component: ListarordencompraComponent;
  let fixture: ComponentFixture<ListarordencompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarordencompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarordencompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
