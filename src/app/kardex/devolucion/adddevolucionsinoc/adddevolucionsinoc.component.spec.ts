import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddevolucionsinocComponent } from './adddevolucionsinoc.component';

describe('AdddevolucionsinocComponent', () => {
  let component: AdddevolucionsinocComponent;
  let fixture: ComponentFixture<AdddevolucionsinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddevolucionsinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddevolucionsinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
