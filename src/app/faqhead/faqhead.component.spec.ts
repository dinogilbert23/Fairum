import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqheadComponent } from './faqhead.component';

describe('FaqheadComponent', () => {
  let component: FaqheadComponent;
  let fixture: ComponentFixture<FaqheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
