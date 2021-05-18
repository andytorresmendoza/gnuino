import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexsinocComponent } from './kardexsinoc.component';

describe('KardexsinocComponent', () => {
  let component: KardexsinocComponent;
  let fixture: ComponentFixture<KardexsinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexsinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexsinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
