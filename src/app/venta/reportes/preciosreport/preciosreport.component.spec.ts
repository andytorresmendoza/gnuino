import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosreportComponent } from './preciosreport.component';

describe('PreciosreportComponent', () => {
  let component: PreciosreportComponent;
  let fixture: ComponentFixture<PreciosreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreciosreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
