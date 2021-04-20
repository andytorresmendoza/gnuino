import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoingresoComponent } from './editar-tipoingreso.component';

describe('EditarTipoingresoComponent', () => {
  let component: EditarTipoingresoComponent;
  let fixture: ComponentFixture<EditarTipoingresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoingresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
