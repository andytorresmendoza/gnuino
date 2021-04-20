import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipodevolucionComponent } from './listar-tipodevolucion.component';

describe('ListarTipodevolucionComponent', () => {
  let component: ListarTipodevolucionComponent;
  let fixture: ComponentFixture<ListarTipodevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipodevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipodevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
