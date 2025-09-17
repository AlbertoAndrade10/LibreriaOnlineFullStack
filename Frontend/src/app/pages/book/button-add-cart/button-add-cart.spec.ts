import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddCart } from './button-add-cart';

describe('ButtonAddCart', () => {
  let component: ButtonAddCart;
  let fixture: ComponentFixture<ButtonAddCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAddCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
