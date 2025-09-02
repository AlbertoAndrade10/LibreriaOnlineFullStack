import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSectionHero } from './cards-section-hero';

describe('CardsSectionHero', () => {
  let component: CardsSectionHero;
  let fixture: ComponentFixture<CardsSectionHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsSectionHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsSectionHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
