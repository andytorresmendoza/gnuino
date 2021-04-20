import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipodocumentoComponent } from './listar-tipodocumento.component';

describe('ListarTipodocumentoComponent', () => {
  let component: ListarTipodocumentoComponent;
  let fixture: ComponentFixture<ListarTipodocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipodocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipodocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
