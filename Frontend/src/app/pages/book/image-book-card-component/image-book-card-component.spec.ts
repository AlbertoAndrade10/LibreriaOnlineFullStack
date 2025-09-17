import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBookCardComponent } from './image-book-card-component';

describe('ImageBookCardComponent', () => {
  let component: ImageBookCardComponent;
  let fixture: ComponentFixture<ImageBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBookCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
