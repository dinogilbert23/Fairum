import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiersheaderComponent } from './tiersheader.component';

describe('TiersheaderComponent', () => {
  let component: TiersheaderComponent;
  let fixture: ComponentFixture<TiersheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiersheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiersheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
