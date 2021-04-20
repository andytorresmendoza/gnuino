import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUnidadmedidaComponent } from './listar-unidadmedida.component';

describe('ListarUnidadmedidaComponent', () => {
  let component: ListarUnidadmedidaComponent;
  let fixture: ComponentFixture<ListarUnidadmedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUnidadmedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUnidadmedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
