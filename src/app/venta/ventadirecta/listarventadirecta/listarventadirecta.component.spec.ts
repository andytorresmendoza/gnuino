import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarventadirectaComponent } from './listarventadirecta.component';

describe('ListarventadirectaComponent', () => {
  let component: ListarventadirectaComponent;
  let fixture: ComponentFixture<ListarventadirectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarventadirectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarventadirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
