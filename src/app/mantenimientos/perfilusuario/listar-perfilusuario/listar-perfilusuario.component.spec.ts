import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPerfilusuarioComponent } from './listar-perfilusuario.component';

describe('ListarPerfilusuarioComponent', () => {
  let component: ListarPerfilusuarioComponent;
  let fixture: ComponentFixture<ListarPerfilusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPerfilusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPerfilusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
