import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcampaniaComponent } from './listarcampania.component';

describe('ListarcampaniaComponent', () => {
  let component: ListarcampaniaComponent;
  let fixture: ComponentFixture<ListarcampaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarcampaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarcampaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
