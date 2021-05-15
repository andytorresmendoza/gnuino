import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaltransferenciasComponent } from './totaltransferencias.component';

describe('TotaltransferenciasComponent', () => {
  let component: TotaltransferenciasComponent;
  let fixture: ComponentFixture<TotaltransferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaltransferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaltransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
