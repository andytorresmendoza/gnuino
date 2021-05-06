import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsalidaproductoComponent } from './listarsalidaproducto.component';

describe('ListarsalidaproductoComponent', () => {
  let component: ListarsalidaproductoComponent;
  let fixture: ComponentFixture<ListarsalidaproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarsalidaproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarsalidaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
