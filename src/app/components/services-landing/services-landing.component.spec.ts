import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLandingComponent } from './services-landing.component';

describe('ServicesLandingComponent', () => {
  let component: ServicesLandingComponent;
  let fixture: ComponentFixture<ServicesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
