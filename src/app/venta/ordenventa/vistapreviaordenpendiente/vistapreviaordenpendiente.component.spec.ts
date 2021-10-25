import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistapreviaordenpendienteComponent } from './vistapreviaordenpendiente.component';

describe('VistapreviaordenpendienteComponent', () => {
  let component: VistapreviaordenpendienteComponent;
  let fixture: ComponentFixture<VistapreviaordenpendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistapreviaordenpendienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistapreviaordenpendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
