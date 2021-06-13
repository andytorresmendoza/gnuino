import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetalleentradasinocComponent } from './editdetalleentradasinoc.component';

describe('EditdetalleentradasinocComponent', () => {
  let component: EditdetalleentradasinocComponent;
  let fixture: ComponentFixture<EditdetalleentradasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdetalleentradasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdetalleentradasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
