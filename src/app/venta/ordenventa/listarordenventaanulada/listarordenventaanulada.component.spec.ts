import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarordenventaanuladaComponent } from './listarordenventaanulada.component';

describe('ListarordenventaanuladaComponent', () => {
  let component: ListarordenventaanuladaComponent;
  let fixture: ComponentFixture<ListarordenventaanuladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarordenventaanuladaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarordenventaanuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
