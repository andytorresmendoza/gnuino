import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipopagoComponent } from './editar-tipopago.component';

describe('EditarTipopagoComponent', () => {
  let component: EditarTipopagoComponent;
  let fixture: ComponentFixture<EditarTipopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipopagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
