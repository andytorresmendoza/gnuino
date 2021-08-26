import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbancoventaComponent } from './addbancoventa.component';

describe('AddbancoventaComponent', () => {
  let component: AddbancoventaComponent;
  let fixture: ComponentFixture<AddbancoventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbancoventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbancoventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
