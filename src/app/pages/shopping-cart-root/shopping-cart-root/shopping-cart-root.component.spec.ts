import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartRootComponent } from './shopping-cart-root.component';

describe('ShoppingCartRootComponent', () => {
  let component: ShoppingCartRootComponent;
  let fixture: ComponentFixture<ShoppingCartRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
