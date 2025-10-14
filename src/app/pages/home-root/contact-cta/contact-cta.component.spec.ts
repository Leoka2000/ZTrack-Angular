import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCtaComponent } from './contact-cta.component';

describe('ContactCtaComponent', () => {
  let component: ContactCtaComponent;
  let fixture: ComponentFixture<ContactCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
