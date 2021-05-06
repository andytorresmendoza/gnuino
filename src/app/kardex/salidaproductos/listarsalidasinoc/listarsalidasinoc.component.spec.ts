import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsalidasinocComponent } from './listarsalidasinoc.component';

describe('ListarsalidasinocComponent', () => {
  let component: ListarsalidasinocComponent;
  let fixture: ComponentFixture<ListarsalidasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarsalidasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarsalidasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
