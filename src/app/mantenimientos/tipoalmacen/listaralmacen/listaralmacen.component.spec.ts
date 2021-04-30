import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaralmacenComponent } from './listaralmacen.component';

describe('ListaralmacenComponent', () => {
  let component: ListaralmacenComponent;
  let fixture: ComponentFixture<ListaralmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaralmacenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaralmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
