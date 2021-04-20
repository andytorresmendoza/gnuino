import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTiposalidaComponent } from './editar-tiposalida.component';

describe('EditarTiposalidaComponent', () => {
  let component: EditarTiposalidaComponent;
  let fixture: ComponentFixture<EditarTiposalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTiposalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTiposalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
