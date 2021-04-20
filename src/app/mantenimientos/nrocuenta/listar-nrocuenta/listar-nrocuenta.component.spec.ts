import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNrocuentaComponent } from './listar-nrocuenta.component';

describe('ListarNrocuentaComponent', () => {
  let component: ListarNrocuentaComponent;
  let fixture: ComponentFixture<ListarNrocuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarNrocuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNrocuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
