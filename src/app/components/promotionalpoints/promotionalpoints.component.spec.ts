import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalpointsComponent } from './promotionalpoints.component';

describe('PromotionalpointsComponent', () => {
  let component: PromotionalpointsComponent;
  let fixture: ComponentFixture<PromotionalpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionalpointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionalpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
