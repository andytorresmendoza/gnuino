import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddentradasinocComponent } from './addentradasinoc.component';

describe('AddentradasinocComponent', () => {
  let component: AddentradasinocComponent;
  let fixture: ComponentFixture<AddentradasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddentradasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddentradasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
