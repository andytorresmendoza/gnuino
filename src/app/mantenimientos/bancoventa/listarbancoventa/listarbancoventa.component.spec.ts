import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarbancoventaComponent } from './listarbancoventa.component';

describe('ListarbancoventaComponent', () => {
  let component: ListarbancoventaComponent;
  let fixture: ComponentFixture<ListarbancoventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarbancoventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarbancoventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
