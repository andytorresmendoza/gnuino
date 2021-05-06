import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalidaproductoComponent } from './addsalidaproducto.component';

describe('AddsalidaproductoComponent', () => {
  let component: AddsalidaproductoComponent;
  let fixture: ComponentFixture<AddsalidaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsalidaproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalidaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
