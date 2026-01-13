import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusLandingComponent } from './aboutus-landing.component';

describe('AboutusLandingComponent', () => {
  let component: AboutusLandingComponent;
  let fixture: ComponentFixture<AboutusLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
