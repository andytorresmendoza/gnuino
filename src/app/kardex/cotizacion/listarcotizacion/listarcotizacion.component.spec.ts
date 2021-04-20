import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcotizacionComponent } from './listarcotizacion.component';

describe('ListarcotizacionComponent', () => {
  let component: ListarcotizacionComponent;
  let fixture: ComponentFixture<ListarcotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarcotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarcotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
