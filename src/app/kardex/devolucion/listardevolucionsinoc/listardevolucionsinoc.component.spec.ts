import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListardevolucionsinocComponent } from './listardevolucionsinoc.component';

describe('ListardevolucionsinocComponent', () => {
  let component: ListardevolucionsinocComponent;
  let fixture: ComponentFixture<ListardevolucionsinocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListardevolucionsinocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListardevolucionsinocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
