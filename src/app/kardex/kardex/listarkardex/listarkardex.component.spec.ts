import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarkardexComponent } from './listarkardex.component';

describe('ListarkardexComponent', () => {
  let component: ListarkardexComponent;
  let fixture: ComponentFixture<ListarkardexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarkardexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarkardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
