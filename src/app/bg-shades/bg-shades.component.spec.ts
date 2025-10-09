import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgShadesComponent } from './bg-shades.component';

describe('BgShadesComponent', () => {
  let component: BgShadesComponent;
  let fixture: ComponentFixture<BgShadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgShadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgShadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
