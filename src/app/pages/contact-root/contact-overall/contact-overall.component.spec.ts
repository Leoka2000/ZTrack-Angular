import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOverallComponent } from './contact-overall.component';

describe('ContactOverallComponent', () => {
  let component: ContactOverallComponent;
  let fixture: ComponentFixture<ContactOverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactOverallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
