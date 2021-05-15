import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldevolucionsinocComponent } from './totaldevolucionsinoc.component';

describe('TotaldevolucionsinocComponent', () => {
  let component: TotaldevolucionsinocComponent;
  let fixture: ComponentFixture<TotaldevolucionsinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaldevolucionsinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaldevolucionsinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
