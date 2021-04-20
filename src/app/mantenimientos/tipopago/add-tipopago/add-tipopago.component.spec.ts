import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipopagoComponent } from './add-tipopago.component';

describe('AddTipopagoComponent', () => {
  let component: AddTipopagoComponent;
  let fixture: ComponentFixture<AddTipopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipopagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
