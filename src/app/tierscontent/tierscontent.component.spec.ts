import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierscontentComponent } from './tierscontent.component';

describe('TierscontentComponent', () => {
  let component: TierscontentComponent;
  let fixture: ComponentFixture<TierscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierscontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
