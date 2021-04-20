import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarbancoComponent } from './editarbanco.component';

describe('EditarbancoComponent', () => {
  let component: EditarbancoComponent;
  let fixture: ComponentFixture<EditarbancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarbancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarbancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
