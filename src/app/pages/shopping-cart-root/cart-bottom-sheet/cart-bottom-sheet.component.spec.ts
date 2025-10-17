import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBottomSheetComponent } from './cart-bottom-sheet.component';

describe('CartBottomSheetComponent', () => {
  let component: CartBottomSheetComponent;
  let fixture: ComponentFixture<CartBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartBottomSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
