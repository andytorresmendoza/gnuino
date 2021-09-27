import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresreportComponent } from './proveedoresreport.component';

describe('ProveedoresreportComponent', () => {
  let component: ProveedoresreportComponent;
  let fixture: ComponentFixture<ProveedoresreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
