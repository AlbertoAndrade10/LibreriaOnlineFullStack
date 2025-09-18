import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDashBoardGrid } from './category-dash-board-grid';

describe('CategoryDashBoardGrid', () => {
  let component: CategoryDashBoardGrid;
  let fixture: ComponentFixture<CategoryDashBoardGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryDashBoardGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryDashBoardGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
