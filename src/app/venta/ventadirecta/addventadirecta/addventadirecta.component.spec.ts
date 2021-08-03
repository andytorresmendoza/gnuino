import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddventadirectaComponent } from './addventadirecta.component';

describe('AddventadirectaComponent', () => {
  let component: AddventadirectaComponent;
  let fixture: ComponentFixture<AddventadirectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddventadirectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddventadirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
