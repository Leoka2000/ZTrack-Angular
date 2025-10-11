import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHouseComponent } from './about-house.component';

describe('AboutHouseComponent', () => {
  let component: AboutHouseComponent;
  let fixture: ComponentFixture<AboutHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
