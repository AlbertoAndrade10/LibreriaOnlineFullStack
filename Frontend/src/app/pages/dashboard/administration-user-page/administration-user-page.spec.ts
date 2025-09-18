import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationUserPage } from './administration-user-page';

describe('AdministrationUserPage', () => {
  let component: AdministrationUserPage;
  let fixture: ComponentFixture<AdministrationUserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationUserPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
