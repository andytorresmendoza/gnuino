import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNrocuentaComponent } from './editar-nrocuenta.component';

describe('EditarNrocuentaComponent', () => {
  let component: EditarNrocuentaComponent;
  let fixture: ComponentFixture<EditarNrocuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarNrocuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNrocuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
