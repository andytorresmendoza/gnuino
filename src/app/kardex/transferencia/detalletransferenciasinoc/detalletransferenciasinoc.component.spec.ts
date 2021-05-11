import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalletransferenciasinocComponent } from './detalletransferenciasinoc.component';

describe('DetalletransferenciasinocComponent', () => {
  let component: DetalletransferenciasinocComponent;
  let fixture: ComponentFixture<DetalletransferenciasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalletransferenciasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalletransferenciasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
