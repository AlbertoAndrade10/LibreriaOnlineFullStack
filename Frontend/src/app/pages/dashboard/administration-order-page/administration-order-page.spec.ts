import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationOrderPage } from './administration-order-page';

describe('AdministrationOrderPage', () => {
  let component: AdministrationOrderPage;
  let fixture: ComponentFixture<AdministrationOrderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationOrderPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
