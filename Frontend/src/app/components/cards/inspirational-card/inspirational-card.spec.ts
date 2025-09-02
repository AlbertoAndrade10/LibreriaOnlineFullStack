import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationalCard } from './inspirational-card';

describe('InspirationalCard', () => {
  let component: InspirationalCard;
  let fixture: ComponentFixture<InspirationalCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspirationalCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspirationalCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
