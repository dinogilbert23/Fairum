import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenheaderComponent } from './tokenheader.component';

describe('TokenheaderComponent', () => {
  let component: TokenheaderComponent;
  let fixture: ComponentFixture<TokenheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
