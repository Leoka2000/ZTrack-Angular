import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaneMapComponent } from './zane-map.component';

describe('ZaneMapComponent', () => {
  let component: ZaneMapComponent;
  let fixture: ComponentFixture<ZaneMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZaneMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
