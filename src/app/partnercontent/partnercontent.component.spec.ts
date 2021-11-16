import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnercontentComponent } from './partnercontent.component';

describe('PartnercontentComponent', () => {
  let component: PartnercontentComponent;
  let fixture: ComponentFixture<PartnercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnercontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
