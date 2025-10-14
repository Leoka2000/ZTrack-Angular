import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmImageAboutUsComponent } from './farm-image-about-us.component';

describe('FarmImageAboutUsComponent', () => {
  let component: FarmImageAboutUsComponent;
  let fixture: ComponentFixture<FarmImageAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmImageAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmImageAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
