import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarordenventaComponent } from './editarordenventa.component';

describe('EditarordenventaComponent', () => {
  let component: EditarordenventaComponent;
  let fixture: ComponentFixture<EditarordenventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarordenventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarordenventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
