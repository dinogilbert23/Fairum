import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomegrowingnetworkComponent } from './homegrowingnetwork.component';

describe('HomegrowingnetworkComponent', () => {
  let component: HomegrowingnetworkComponent;
  let fixture: ComponentFixture<HomegrowingnetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomegrowingnetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomegrowingnetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
