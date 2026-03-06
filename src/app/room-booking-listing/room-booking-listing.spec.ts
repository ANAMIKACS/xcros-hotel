import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingListing } from './room-booking-listing';

describe('RoomBookingListing', () => {
  let component: RoomBookingListing;
  let fixture: ComponentFixture<RoomBookingListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomBookingListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
