import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcotianuladasComponent } from './listarcotianuladas.component';

describe('ListarcotianuladasComponent', () => {
  let component: ListarcotianuladasComponent;
  let fixture: ComponentFixture<ListarcotianuladasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarcotianuladasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarcotianuladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
