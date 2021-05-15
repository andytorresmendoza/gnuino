import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldevolucionComponent } from './totaldevolucion.component';

describe('TotaldevolucionComponent', () => {
  let component: TotaldevolucionComponent;
  let fixture: ComponentFixture<TotaldevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaldevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaldevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
