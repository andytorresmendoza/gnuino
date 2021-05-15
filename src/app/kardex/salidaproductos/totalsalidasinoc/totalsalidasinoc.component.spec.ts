import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsalidasinocComponent } from './totalsalidasinoc.component';

describe('TotalsalidasinocComponent', () => {
  let component: TotalsalidasinocComponent;
  let fixture: ComponentFixture<TotalsalidasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsalidasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsalidasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
