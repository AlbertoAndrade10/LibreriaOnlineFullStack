import { TestBed } from '@angular/core/testing';

import { LiteraryGenreService } from './literary-genre-service';

describe('LiteraryGenreService', () => {
  let service: LiteraryGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiteraryGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
