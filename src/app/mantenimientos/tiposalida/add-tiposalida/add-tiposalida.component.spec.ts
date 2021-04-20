import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTiposalidaComponent } from './add-tiposalida.component';

describe('AddTiposalidaComponent', () => {
  let component: AddTiposalidaComponent;
  let fixture: ComponentFixture<AddTiposalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTiposalidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTiposalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
