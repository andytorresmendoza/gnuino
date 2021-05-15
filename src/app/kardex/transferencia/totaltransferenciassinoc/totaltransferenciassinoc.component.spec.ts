import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaltransferenciassinocComponent } from './totaltransferenciassinoc.component';

describe('TotaltransferenciassinocComponent', () => {
  let component: TotaltransferenciassinocComponent;
  let fixture: ComponentFixture<TotaltransferenciassinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaltransferenciassinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaltransferenciassinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
