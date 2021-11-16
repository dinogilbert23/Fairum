import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerheadComponent } from './partnerhead.component';

describe('PartnerheadComponent', () => {
  let component: PartnerheadComponent;
  let fixture: ComponentFixture<PartnerheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
