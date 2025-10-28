import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHeroCardComponent } from './blog-hero-card.component';

describe('BlogHeroCardComponent', () => {
  let component: BlogHeroCardComponent;
  let fixture: ComponentFixture<BlogHeroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHeroCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogHeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
