import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtransferenciasinocComponent } from './addtransferenciasinoc.component';

describe('AddtransferenciasinocComponent', () => {
  let component: AddtransferenciasinocComponent;
  let fixture: ComponentFixture<AddtransferenciasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtransferenciasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtransferenciasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
