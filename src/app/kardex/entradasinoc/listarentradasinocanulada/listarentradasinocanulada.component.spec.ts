import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarentradasinocanuladaComponent } from './listarentradasinocanulada.component';

describe('ListarentradasinocanuladaComponent', () => {
  let component: ListarentradasinocanuladaComponent;
  let fixture: ComponentFixture<ListarentradasinocanuladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarentradasinocanuladaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarentradasinocanuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
