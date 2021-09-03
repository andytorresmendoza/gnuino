import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcampaniaComponent } from './addcampania.component';

describe('AddcampaniaComponent', () => {
  let component: AddcampaniaComponent;
  let fixture: ComponentFixture<AddcampaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcampaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
