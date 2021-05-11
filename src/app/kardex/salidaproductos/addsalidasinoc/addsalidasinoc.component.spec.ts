import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalidasinocComponent } from './addsalidasinoc.component';

describe('AddsalidasinocComponent', () => {
  let component: AddsalidasinocComponent;
  let fixture: ComponentFixture<AddsalidasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsalidasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalidasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
