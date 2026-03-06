import { Routes } from '@angular/router';
import { RoomBookingListing } from './room-booking-listing/room-booking-listing';
import { ToursTravelsListing } from './tours-travels-listing/tours-travels-listing';

export const routes: Routes = [
    {path:'roomBookingListing', component:RoomBookingListing},
    {path:'toursTravelsListing', component:ToursTravelsListing}
];
