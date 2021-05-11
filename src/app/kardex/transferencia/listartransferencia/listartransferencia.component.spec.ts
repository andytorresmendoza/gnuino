import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartransferenciaComponent } from './listartransferencia.component';

describe('ListartransferenciaComponent', () => {
  let component: ListartransferenciaComponent;
  let fixture: ComponentFixture<ListartransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListartransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListartransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
