import { Routes } from '@angular/router';
import { RoomBookingListing } from './room-booking-listing/room-booking-listing';
import { ToursTravelsListing } from './tours-travels-listing/tours-travels-listing';
import { Home } from './home/home';
import { Hoteldiscount } from './hoteldiscount/hoteldiscount';
import { RoomBookingListingDetails } from './room-booking-listing-details/room-booking-listing-details';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'roomBookingListing', component:RoomBookingListing},
    {path:'toursTravelsListing', component:ToursTravelsListing},
    {path:'hoteldiscount', component:Hoteldiscount},
    {path: 'roomBookingListingDetails', component: RoomBookingListingDetails}
];
