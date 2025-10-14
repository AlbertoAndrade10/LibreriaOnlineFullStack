import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookForm } from './update-book-form';

describe('UpdateBookForm', () => {
  let component: UpdateBookForm;
  let fixture: ComponentFixture<UpdateBookForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBookForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBookForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
