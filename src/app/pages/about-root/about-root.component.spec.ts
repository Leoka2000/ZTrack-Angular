import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRootComponent } from './about-root.component';

describe('AboutRootComponent', () => {
  let component: AboutRootComponent;
  let fixture: ComponentFixture<AboutRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
