import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarordanuladasComponent } from './listarordanuladas.component';

describe('ListarordanuladasComponent', () => {
  let component: ListarordanuladasComponent;
  let fixture: ComponentFixture<ListarordanuladasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarordanuladasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarordanuladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
