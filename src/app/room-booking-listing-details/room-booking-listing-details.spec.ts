import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingListingDetails } from './room-booking-listing-details';

describe('RoomBookingListingDetails', () => {
  let component: RoomBookingListingDetails;
  let fixture: ComponentFixture<RoomBookingListingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingListingDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomBookingListingDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
