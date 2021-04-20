import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipodevolucionComponent } from './editar-tipodevolucion.component';

describe('EditarTipodevolucionComponent', () => {
  let component: EditarTipodevolucionComponent;
  let fixture: ComponentFixture<EditarTipodevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipodevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipodevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
