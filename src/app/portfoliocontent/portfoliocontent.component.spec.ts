import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliocontentComponent } from './portfoliocontent.component';

describe('PortfoliocontentComponent', () => {
  let component: PortfoliocontentComponent;
  let fixture: ComponentFixture<PortfoliocontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliocontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliocontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
