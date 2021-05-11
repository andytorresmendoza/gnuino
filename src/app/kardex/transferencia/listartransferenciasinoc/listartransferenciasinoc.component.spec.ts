import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListartransferenciasinocComponent } from './listartransferenciasinoc.component';

describe('ListartransferenciasinocComponent', () => {
  let component: ListartransferenciasinocComponent;
  let fixture: ComponentFixture<ListartransferenciasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListartransferenciasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListartransferenciasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
