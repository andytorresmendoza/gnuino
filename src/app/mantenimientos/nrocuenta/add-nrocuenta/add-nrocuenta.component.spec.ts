import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNrocuentaComponent } from './add-nrocuenta.component';

describe('AddNrocuentaComponent', () => {
  let component: AddNrocuentaComponent;
  let fixture: ComponentFixture<AddNrocuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNrocuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNrocuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
