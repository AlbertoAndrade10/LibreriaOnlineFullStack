import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationStockPage } from './administration-stock-page';

describe('AdministrationStockPage', () => {
  let component: AdministrationStockPage;
  let fixture: ComponentFixture<AdministrationStockPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationStockPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
