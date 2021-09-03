import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistapreviadirectaComponent } from './vistapreviadirecta.component';

describe('VistapreviadirectaComponent', () => {
  let component: VistapreviadirectaComponent;
  let fixture: ComponentFixture<VistapreviadirectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistapreviadirectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistapreviadirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
