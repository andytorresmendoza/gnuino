import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarventadirectaanuladoComponent } from './listarventadirectaanulado.component';

describe('ListarventadirectaanuladoComponent', () => {
  let component: ListarventadirectaanuladoComponent;
  let fixture: ComponentFixture<ListarventadirectaanuladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarventadirectaanuladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarventadirectaanuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
