import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerfilusuarioComponent } from './add-perfilusuario.component';

describe('AddPerfilusuarioComponent', () => {
  let component: AddPerfilusuarioComponent;
  let fixture: ComponentFixture<AddPerfilusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPerfilusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPerfilusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
