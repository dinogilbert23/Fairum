import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogheaderComponent } from './blogheader.component';

describe('BlogheaderComponent', () => {
  let component: BlogheaderComponent;
  let fixture: ComponentFixture<BlogheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
