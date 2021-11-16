import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqcontentComponent } from './faqcontent.component';

describe('FaqcontentComponent', () => {
  let component: FaqcontentComponent;
  let fixture: ComponentFixture<FaqcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
