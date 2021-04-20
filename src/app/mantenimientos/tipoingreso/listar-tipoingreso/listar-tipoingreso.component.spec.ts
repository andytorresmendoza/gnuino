import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoingresoComponent } from './listar-tipoingreso.component';

describe('ListarTipoingresoComponent', () => {
  let component: ListarTipoingresoComponent;
  let fixture: ComponentFixture<ListarTipoingresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoingresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
