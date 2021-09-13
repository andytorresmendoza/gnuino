import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportestockComponent } from './reportestock.component';

describe('ReportestockComponent', () => {
  let component: ReportestockComponent;
  let fixture: ComponentFixture<ReportestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportestockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
