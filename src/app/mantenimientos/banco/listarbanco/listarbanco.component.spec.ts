import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarbancoComponent } from './listarbanco.component';

describe('ListarbancoComponent', () => {
  let component: ListarbancoComponent;
  let fixture: ComponentFixture<ListarbancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarbancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarbancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
