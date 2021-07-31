import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcotiventaanuladaComponent } from './listarcotiventaanulada.component';

describe('ListarcotiventaanuladaComponent', () => {
  let component: ListarcotiventaanuladaComponent;
  let fixture: ComponentFixture<ListarcotiventaanuladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarcotiventaanuladaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarcotiventaanuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
