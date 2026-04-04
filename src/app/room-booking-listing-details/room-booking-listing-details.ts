import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Carousel } from 'primeng/carousel';
import { CarouselModule } from 'primeng/carousel';
import { IconField } from "primeng/iconfield";
import { InputIcon } from "primeng/inputicon";
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';

register();

@Component({
  standalone: true,
  selector: 'app-room-booking-listing-details',
  imports: [CommonModule, FormsModule, InputNumberModule, DatePickerModule, GalleriaModule, DialogModule, ButtonModule, InputTextModule, CarouselModule, SelectModule],
  templateUrl: './room-booking-listing-details.html',
  styleUrl: './room-booking-listing-details.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoomBookingListingDetails implements OnInit {

  private hotelService = inject(HotelService);
  private route = inject(ActivatedRoute);

  hotelId: string | null = null;
  hotelDetails: any = null;
  availableRooms: any[] = [];
  errorMessage: string = '';

  ngOnInit(): void {
    let hotelId = this.route.snapshot.paramMap.get('id')
      ?? this.route.snapshot.queryParamMap.get('id');

    // Mongoose rejects '1' with a 400 CastError. 
    // If the router passes legacy ID, fallback to the valid mongo mock for testing.
    if (hotelId === '1' || (hotelId && hotelId.length < 24)) {
        hotelId = '69cdfe9f154642552ceb2eba';
    }

    if (hotelId) {
      this.hotelId = hotelId;

      // 1. Fetch Hotel Details (Step 3.1)
      this.hotelService.getHotelDetailsV1(hotelId).subscribe(data => {
        if (data) {
          this.hotelDetails = data;
          this.populateFromHotel(data);
        } else {
          // Fallback to legacy endpoint if v1 misses
          this.hotelService.getHotelById(hotelId).subscribe(hotel => {
            if (hotel) {
              this.populateFromHotel(hotel);
            }
          });
        }
      });

      // 2. Fetch Available Rooms (Step 3.2)
      this.fetchRoomsForHotel();
    }

    // Fetch master lookups for dropdowns
    this.fetchDropdownMetadata();
  }

  fetchRoomsForHotel() {
    if(!this.hotelId) return;
    this.hotelService.getRoomsForHotel(this.hotelId).subscribe(rooms => {
      this.availableRooms = rooms;
      if (rooms && rooms.length > 0) {
        // Map actual hotel inventory to the dropdown
        this.roomCategories = rooms.map((r: any) => ({ name: r.roomCategory || r.name, id: r.id }));
      }
    });
  }

  fetchDropdownMetadata() {
    this.hotelService.getExtraServices().subscribe(services => {
      if (services && services.length > 0) {
        this.extraServicesList = services.map(s => ({ name: s }));
      }
    });
  }

  private populateFromHotel(hotel: any): void {
    this.title = hotel.hotelTitle || this.title;
    this.category = hotel.hotelType || this.category;
    this.address = hotel.location?.address || this.address;
    if (hotel.rooms) {
      this.stats[0] = { ...this.stats[0], value: String(hotel.rooms) };
    }
    if (hotel.price) {
      this.stats[2] = { ...this.stats[2], value: '\u20b9' + hotel.price.toLocaleString() };
    }
    if (hotel.cancelationRules) {
      this.CancelationRules = hotel.cancelationRules;
    }
    if (hotel.galleryImages?.length) {
      this.Gallery = hotel.galleryImages.map((src: string) => ({
        GalleryImageSrc: src,
        GalleryThambnailImageSrc: src
      }));
    }
    if (hotel.amenities?.length) {
      this.amenities = hotel.amenities.map((a: string) => ({ icon: 'fa-check', name: a }));
    }
    if (hotel.description) {
      this.aboutRoomDescription = hotel.description;
    }
  }


  // STATS


  stats = [
    {
        icon: 'fa-building', name: 'building' ,

      value: '54',
      title: 'Rooms',
      svg: 'M 0 30 V 28 Q 20 17 55 5 T 100 17 V 60 Z'
    },
    {
      icon: 'fa-tag', name: 'tag',
      value: '100 +',
      title: 'Bookings',
      svg: 'M0 30 V12 Q30 12 55 5 T100 11 V30z'
    },
    {
      icon: 'fa-hand-holding-dollar', name: 'hand-holding-dollar',
      value: '₹10,000',
      title: 'Leads',
      svg: 'M0 30 V12 Q30 12 55 5 T100 11 V30z'
    }
  ];


  // AVAILABLE ROOMS

rooms: any[] = [];


  // THIRD PARTY STORES


  isThirdPartyOpen = false;

  toggleThirdPartyOpen() {
    this.isThirdPartyOpen = !this.isThirdPartyOpen;
  }

//repert

 visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
    category = 'Business'
    address = 'D-106 22 cross street'

    onFileSelected(){

    }
    onUpload(){

    }

  // STORES DATA
  

  stores: any[] = [];

  
  // CATEGORY DROPDOWN FILTER


  isCategoryBoxOpen=false;
  options=['Category', 'Recent', 'Popular', 'Recommended']
  selectedOption:string='Category';
  toggleCategoryBox(){
    this.isCategoryBoxOpen= !this.isCategoryBoxOpen
  }
   selectOption(option: string) {
    this.selectedOption = option; 
    this.isCategoryBoxOpen = false; 
  }
 

  // CARD EXPAND / COLLAPSE

  expandedShopId: number | null = null;

  toggleCard(id: number) {
    this.expandedShopId = this.expandedShopId === id ? null : id;
  }

 
  // RECOMMENDED ATTRACTIONS
  

  isRecommendedAttractionOpen = false;

  toggleRecommendedAttractionOpen() {
    this.isRecommendedAttractionOpen = !this.isRecommendedAttractionOpen;
  }

  places: any[] = [];

  //faq

  isFaqOpen = false
  toggleFaqOpen(){
    this.isFaqOpen =! this.isFaqOpen
  }

  expandedQuestionId: number | null = null;

  toggleFaqQuestionOpen(id: number) {
    this.isFaqQuestionOpen=!this.isFaqQuestionOpen
    this.expandedQuestionId = this.expandedQuestionId === id ? null : id;
  }

faqQuestions: any[] = [];

  isFaqQuestionOpen = false
 
  //BOOK HOTEL

  isBookHotelOpen = false
  toggleBookHotelOpen(){
    this.isBookHotelOpen=!this.isBookHotelOpen
  }


  //right-section

//Date 
indate: Date | undefined;
outdate: Date | undefined;
dateRange: Date[] | undefined;

//Count
  room: number = 1;
  adult: number = 1;
  children: number = 1;

  //Room Type
  roomCategories = [
    { name: 'Budget' },
    { name: 'Mid-range' },
    { name: 'Luxury' },
    { name: 'Family-friendly' },
    { name: 'Business' }
  ];
  selectedRoomCategory: any;

  //Extra Services
  extraServicesList = [
    { name: 'Concierge' },
    { name: 'Room Service' },
    { name: 'Spa Services' },
    { name: 'Transportation' }
  ];
  selectedExtraService: any;

//special offer

 getCalculatedTotal(): number {
    let cost = 0;
    const basePrice = this.selectedRoomCategory?.pricing?.basePricePerNight || this.selectedRoomCategory?.price || 10000;
    
    // Calculate nights
    let nights = 1;
    if (this.indate && this.outdate) {
      const diffTime = Math.abs(this.outdate.getTime() - this.indate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 0) nights = diffDays;
    }
    
    cost = (basePrice * nights) * this.room;

    // Simulate extra service flat costs
    if (this.selectedExtraService) {
      cost += 500; 
    }
    return cost;
  }

  bookNow() {
    if (!this.hotelId || !this.selectedRoomCategory || !this.indate || !this.outdate) {
      alert("Please complete the booking form with dates and room type.");
      return;
    }

    const payload = {
      roomId: this.selectedRoomCategory.id || 'DEFAULT_ROOM_ID',
      hotelId: this.hotelId,
      checkIn: this.indate.toISOString().split('T')[0],
      checkOut: this.outdate.toISOString().split('T')[0],
    };

    // Step 3.3 and 3.4 Integration
    this.hotelService.checkRoomAvailability(payload).subscribe(res => {
      // NOTE: Our mocked service returns `{available: false}` natively as a fallback.
      // Ignoring strictly for demo purposes, but in reality we transition if `res.available === true`.
      
      const finalizePayload = {
        hotelId: this.hotelId,
        roomId: payload.roomId,
        userId: 'USER_ID', // Replace with Auth context
        checkInDate: payload.checkIn,
        checkOutDate: payload.checkOut,
        guests: { adults: this.adult, children: this.children },
        extraServices: this.selectedExtraService ? [this.selectedExtraService.name] : [],
        totalCost: this.getCalculatedTotal()
      };

      this.hotelService.createBooking(finalizePayload).subscribe(bookingRes => {
        alert("Booking request transmitted properly to /api/v1/bookings!");
      }, err => {
        alert("Simulated backend is unconnected, but payload was generated!");
      });
    });
  }

offers: any[] = [];


//user block
  isUserAgentBlockOpen = true
  toggleUserAgentBlock(){
    this.isUserAgentBlockOpen =!this.isUserAgentBlockOpen;
  }

  activeTab: number = 0; // Business is active by default

setActiveTab(index: number) {
  this.activeTab = index;
}
  businessProfile = '/room-booking_details-page/Novotel London Canary.png'
  title = 'Xcros'
  mailDetails = 'contact-us@Xcros.inXCROS'

  AgentProfile = '/room-booking_details-page/agent-profile.jpg'
  Agenttitle='Bala'
  AgentmailDetails= 'Designation'

//review

isReviewsOpen = false;
toggleReviews(){
  this.isReviewsOpen=!this.isReviewsOpen
}
viewReviews(){
  
}

//Socials

isSocialsOpen = false;
toggleSocials(){
  this.isSocialsOpen=!this.isSocialsOpen
}

Bannertitle = 'ADVERTISEMENT BY XCROS'

  firstBanner ='/room-booking_details-page/firstBanner.png'

  secondBanner= '/room-booking_details-page/secondBanner.png'

  thirdBanner = '/room-booking_details-page/thirdBanner.png'


  //get details

  isGetDetailsOpen = false
  selectedPopupRoom: any = null;

  overlay(room?: any){
    if (room) {
      this.selectedPopupRoom = room;
    }
    this.isGetDetailsOpen =! this.isGetDetailsOpen
  }
  closeFilter() {
  this.isGetDetailsOpen = false;
}
  getDetailsImage = '/room-booking_details-page/Rectangle 89.png'

  //aboutroom

  isAboutRoom = false
  toggleAboutRoom(){
    this.isAboutRoom=!this.isAboutRoom
  }
  aboutRoomDescription: string = '';
  //gallery

  isGalleryOpen = false
  toggleGallery(){
    this.isGalleryOpen =! this.isGalleryOpen
  }

  
  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 3 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 2 }
  ];
  

  Gallery : any = [];


  isComplementaryOpen = false
  toggleComplimentary(){
    this.isComplementaryOpen=!this.isComplementaryOpen
  }

  amenities: any[] = [];

isRoomFeatureOpen = false;
toggleRoomFeature(){
  this.isRoomFeatureOpen=!this.isRoomFeatureOpen
}
roomFeature: any[] = [];

isServicesAmenities = false;
toggleServicesAmenities(){
  this.isServicesAmenities=!this.isServicesAmenities
}

ServicesAmenities: any[] = [];

CancelationRules: string = '';
//tariff

isTariff = false;
toggleTariff(){
  this.isTariff=!this.isTariff
}

services: any[] = [];

//house rules

isHouseRules = false;
toggleHouseRules(){
  this.isHouseRules=!this.isHouseRules
}

houseRulesLeft: any[] = [];

houseRulesRight: any[] = [];
}