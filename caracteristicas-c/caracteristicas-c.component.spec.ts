import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasCComponent } from './caracteristicas-c.component';

describe('CaracteristicasCComponent', () => {
  let component: CaracteristicasCComponent;
  let fixture: ComponentFixture<CaracteristicasCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristicasCComponent]
    });
    fixture = TestBed.createComponent(CaracteristicasCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
