import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryGenresContentGrid } from './literary-genres-content-grid';

describe('LiteraryGenresContentGrid', () => {
  let component: LiteraryGenresContentGrid;
  let fixture: ComponentFixture<LiteraryGenresContentGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiteraryGenresContentGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiteraryGenresContentGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
