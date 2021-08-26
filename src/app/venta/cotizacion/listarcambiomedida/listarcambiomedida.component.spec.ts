import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcambiomedidaComponent } from './listarcambiomedida.component';

describe('ListarcambiomedidaComponent', () => {
  let component: ListarcambiomedidaComponent;
  let fixture: ComponentFixture<ListarcambiomedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarcambiomedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarcambiomedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
