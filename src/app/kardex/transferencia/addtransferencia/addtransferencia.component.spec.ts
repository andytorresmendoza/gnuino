import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransferenciaComponent } from './addtransferencia.component';

describe('AddtransferenciaComponent', () => {
  let component: AddtransferenciaComponent;
  let fixture: ComponentFixture<AddtransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
