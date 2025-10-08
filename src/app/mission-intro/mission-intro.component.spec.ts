import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionIntroComponent } from './mission-intro.component';

describe('MissionIntroComponent', () => {
  let component: MissionIntroComponent;
  let fixture: ComponentFixture<MissionIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
