import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebackgroundComponent } from './homebackground.component';

describe('HomebackgroundComponent', () => {
  let component: HomebackgroundComponent;
  let fixture: ComponentFixture<HomebackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
