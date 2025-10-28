import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRootComponent } from './blog-root.component';

describe('BlogRootComponent', () => {
  let component: BlogRootComponent;
  let fixture: ComponentFixture<BlogRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
