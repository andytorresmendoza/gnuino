import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdencomprareportComponent } from './ordencomprareport.component';

describe('OrdencomprareportComponent', () => {
  let component: OrdencomprareportComponent;
  let fixture: ComponentFixture<OrdencomprareportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdencomprareportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdencomprareportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
