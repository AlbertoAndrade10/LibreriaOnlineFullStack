import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationBookPage } from './administration-book-page';

describe('AdministrationBookPage', () => {
  let component: AdministrationBookPage;
  let fixture: ComponentFixture<AdministrationBookPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationBookPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
