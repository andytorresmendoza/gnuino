import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoingresoComponent } from './add-tipoingreso.component';

describe('AddTipoingresoComponent', () => {
  let component: AddTipoingresoComponent;
  let fixture: ComponentFixture<AddTipoingresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoingresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
