import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesdetalleComponent } from './clientesdetalle.component';

describe('ClientesdetalleComponent', () => {
  let component: ClientesdetalleComponent;
  let fixture: ComponentFixture<ClientesdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesdetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
