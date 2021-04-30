import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarordencompraComponent } from './editarordencompra.component';

describe('EditarordencompraComponent', () => {
  let component: EditarordencompraComponent;
  let fixture: ComponentFixture<EditarordencompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarordencompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarordencompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
