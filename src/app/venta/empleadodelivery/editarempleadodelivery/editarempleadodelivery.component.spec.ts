import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarempleadodeliveryComponent } from './editarempleadodelivery.component';

describe('EditarempleadodeliveryComponent', () => {
  let component: EditarempleadodeliveryComponent;
  let fixture: ComponentFixture<EditarempleadodeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarempleadodeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarempleadodeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
