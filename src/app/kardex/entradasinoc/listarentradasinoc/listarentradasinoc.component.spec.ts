import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarentradasinocComponent } from './listarentradasinoc.component';

describe('ListarentradasinocComponent', () => {
  let component: ListarentradasinocComponent;
  let fixture: ComponentFixture<ListarentradasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarentradasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarentradasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
