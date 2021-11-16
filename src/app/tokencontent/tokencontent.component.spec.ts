import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokencontentComponent } from './tokencontent.component';

describe('TokencontentComponent', () => {
  let component: TokencontentComponent;
  let fixture: ComponentFixture<TokencontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokencontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokencontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
