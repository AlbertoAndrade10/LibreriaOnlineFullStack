import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationLiteraryGenrePage } from './administration-literary-genre-page';

describe('AdministrationLiteraryGenrePage', () => {
  let component: AdministrationLiteraryGenrePage;
  let fixture: ComponentFixture<AdministrationLiteraryGenrePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationLiteraryGenrePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationLiteraryGenrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
