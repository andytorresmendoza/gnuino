import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTiposalidaComponent } from './listar-tiposalida.component';

describe('ListarTiposalidaComponent', () => {
  let component: ListarTiposalidaComponent;
  let fixture: ComponentFixture<ListarTiposalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTiposalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTiposalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
