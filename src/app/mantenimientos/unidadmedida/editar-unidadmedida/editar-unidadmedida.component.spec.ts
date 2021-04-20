import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUnidadmedidaComponent } from './editar-unidadmedida.component';

describe('EditarUnidadmedidaComponent', () => {
  let component: EditarUnidadmedidaComponent;
  let fixture: ComponentFixture<EditarUnidadmedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUnidadmedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUnidadmedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
