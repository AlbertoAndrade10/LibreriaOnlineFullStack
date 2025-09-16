import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryGenreBar } from './literary-genre-bar';

describe('LiteraryGenreBar', () => {
  let component: LiteraryGenreBar;
  let fixture: ComponentFixture<LiteraryGenreBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteraryGenreBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryGenreBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
