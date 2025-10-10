import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartButttonComponent } from './cart-buttton.component';

describe('CartButttonComponent', () => {
  let component: CartButttonComponent;
  let fixture: ComponentFixture<CartButttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartButttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartButttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
