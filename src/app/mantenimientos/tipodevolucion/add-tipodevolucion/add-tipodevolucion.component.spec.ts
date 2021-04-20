import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipodevolucionComponent } from './add-tipodevolucion.component';

describe('AddTipodevolucionComponent', () => {
  let component: AddTipodevolucionComponent;
  let fixture: ComponentFixture<AddTipodevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipodevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipodevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
