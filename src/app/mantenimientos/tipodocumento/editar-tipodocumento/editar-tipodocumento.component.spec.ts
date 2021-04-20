import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipodocumentoComponent } from './editar-tipodocumento.component';

describe('EditarTipodocumentoComponent', () => {
  let component: EditarTipodocumentoComponent;
  let fixture: ComponentFixture<EditarTipodocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipodocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipodocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
