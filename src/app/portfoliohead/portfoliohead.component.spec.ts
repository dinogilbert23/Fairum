import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioheadComponent } from './portfoliohead.component';

describe('PortfolioheadComponent', () => {
  let component: PortfolioheadComponent;
  let fixture: ComponentFixture<PortfolioheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
