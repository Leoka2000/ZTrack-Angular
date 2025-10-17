import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgShadesBottomComponent } from './bg-shades-bottom.component';

describe('BgShadesBottomComponent', () => {
  let component: BgShadesBottomComponent;
  let fixture: ComponentFixture<BgShadesBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgShadesBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgShadesBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
