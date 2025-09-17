import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPayProduct } from './button-pay-product';

describe('ButtonPayProduct', () => {
  let component: ButtonPayProduct;
  let fixture: ComponentFixture<ButtonPayProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPayProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonPayProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
