import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTemplateContent } from './global-template-content';

describe('GlobalTemplateContent', () => {
  let component: GlobalTemplateContent;
  let fixture: ComponentFixture<GlobalTemplateContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalTemplateContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalTemplateContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
