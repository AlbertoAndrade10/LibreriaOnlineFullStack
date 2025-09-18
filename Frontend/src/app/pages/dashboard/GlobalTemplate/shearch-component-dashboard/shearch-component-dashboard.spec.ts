import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearchComponentDashboard } from './shearch-component-dashboard';

describe('ShearchComponentDashboard', () => {
  let component: ShearchComponentDashboard;
  let fixture: ComponentFixture<ShearchComponentDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShearchComponentDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShearchComponentDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
