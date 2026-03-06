import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursTravelsListing } from './tours-travels-listing';

describe('ToursTravelsListing', () => {
  let component: ToursTravelsListing;
  let fixture: ComponentFixture<ToursTravelsListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToursTravelsListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursTravelsListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
