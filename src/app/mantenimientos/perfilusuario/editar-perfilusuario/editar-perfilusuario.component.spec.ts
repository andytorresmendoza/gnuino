import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilusuarioComponent } from './editar-perfilusuario.component';

describe('EditarPerfilusuarioComponent', () => {
  let component: EditarPerfilusuarioComponent;
  let fixture: ComponentFixture<EditarPerfilusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerfilusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerfilusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
