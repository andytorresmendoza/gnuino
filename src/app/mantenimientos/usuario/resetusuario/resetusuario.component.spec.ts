import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetusuarioComponent } from './resetusuario.component';

describe('ResetusuarioComponent', () => {
  let component: ResetusuarioComponent;
  let fixture: ComponentFixture<ResetusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
