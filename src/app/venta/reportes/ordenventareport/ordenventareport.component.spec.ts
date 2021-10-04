import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenventareportComponent } from './ordenventareport.component';

describe('OrdenventareportComponent', () => {
  let component: OrdenventareportComponent;
  let fixture: ComponentFixture<OrdenventareportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenventareportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenventareportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
