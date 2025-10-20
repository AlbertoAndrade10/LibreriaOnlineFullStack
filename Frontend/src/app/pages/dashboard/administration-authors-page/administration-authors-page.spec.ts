import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationAuthorsPage } from './administration-authors-page';

describe('AdministrationAuthorsPage', () => {
  let component: AdministrationAuthorsPage;
  let fixture: ComponentFixture<AdministrationAuthorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationAuthorsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationAuthorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
