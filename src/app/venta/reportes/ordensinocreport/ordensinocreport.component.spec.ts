import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensinocreportComponent } from './ordensinocreport.component';

describe('OrdensinocreportComponent', () => {
  let component: OrdensinocreportComponent;
  let fixture: ComponentFixture<OrdensinocreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdensinocreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdensinocreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
