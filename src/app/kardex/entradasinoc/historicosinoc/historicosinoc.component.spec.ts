import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricosinocComponent } from './historicosinoc.component';

describe('HistoricosinocComponent', () => {
  let component: HistoricosinocComponent;
  let fixture: ComponentFixture<HistoricosinocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricosinocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricosinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
