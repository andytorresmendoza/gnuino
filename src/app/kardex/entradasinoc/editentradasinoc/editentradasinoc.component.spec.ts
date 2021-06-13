import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditentradasinocComponent } from './editentradasinoc.component';

describe('EditentradasinocComponent', () => {
  let component: EditentradasinocComponent;
  let fixture: ComponentFixture<EditentradasinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditentradasinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditentradasinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
