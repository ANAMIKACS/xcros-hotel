import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { GalleriaModule } from 'primeng/galleria';

register();

@Component({
  standalone: true,
  selector: 'app-room-booking-listing-details',
  imports: [CommonModule, FormsModule, InputNumberModule, DatePickerModule, GalleriaModule],
  templateUrl: './room-booking-listing-details.html',
  styleUrl: './room-booking-listing-details.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoomBookingListingDetails{
 


  // STATS


  stats = [
    {
      img: '/room-booking_details-page/building.png',
      value: '54',
      title: 'Rooms',
      svg: 'M 0 30 V 28 Q 20 17 55 5 T 100 17 V 60 Z'
    },
    {
      img: '/room-booking_details-page/guarantee.png',
      value: '100 +',
      title: 'Bookings',
      svg: 'M0 30 V12 Q30 12 55 5 T100 11 V30z'
    },
    {
      img: '/room-booking_details-page/money.png',
      value: '₹10,000',
      title: 'Leads',
      svg: 'M0 30 V12 Q30 12 55 5 T100 11 V30z'
    }
  ];


  // AVAILABLE ROOMS

rooms = [ 
  { name: 'Standard Family Room', price: 10000, guest: 'Max Guest: 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/room-booking_details-page/room.jpg' }, 
  { name: 'Standard Family Room', price: 10000, guest: 'Max Guest: 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/room-booking_details-page/room.jpg' },
{ name: 'Standard Family Room', price: 10000, guest: 'Max Guest: 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/room-booking_details-page/room.jpg' },
{ name: 'Standard Family Room', price: 10000, guest: 'Max Guest: 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/room-booking_details-page/room.jpg' },
{ name: 'Standard Family Room', price: 10000, guest: 'Max Guest: 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/room-booking_details-page/room.jpg' },
 ];


  // THIRD PARTY STORES


  isThirdPartyOpen = false;

  toggleThirdPartyOpen() {
    this.isThirdPartyOpen = !this.isThirdPartyOpen;
  }




  // STORES DATA
  

  stores = [
    {
      id: 1,
      banner: '/room-booking_details-page/room.jpg',
      logo: '/room-booking_details-page/Novotel London Canary.png',
      views: 0,
      category: 'Travel',
      status: 'CLOSED',
      name: 'Business Name',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      owner: 'Bill Trust',
      profile : '/room-booking_details-page/by-profile.png'
    },
    {
      id: 2,
      banner: '/room-booking_details-page/room.jpg',
      logo: '/room-booking_details-page/Novotel London Canary.png',
      views: 0,
      category: 'Taxi',
      status: 'CLOSED',
      name: 'Business Name',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      owner: 'Bill Trust',
      profile : '/room-booking_details-page/by-profile.png'
    },
    {
      id: 3,
      banner: '/room-booking_details-page/room.jpg',
      logo: '/room-booking_details-page/Novotel London Canary.png',
      views: 0,
      category: 'Restaurant',
      status: 'CLOSED',
      name: 'Business Name',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      owner: 'Bill Trust',
      profile : '/room-booking_details-page/by-profile.png'
    },
    {
      id: 4,
      banner: '/room-booking_details-page/room.jpg',
      logo: '/room-booking_details-page/Novotel London Canary.png',
      views: 0,
      category: 'Taxi',
      status: 'CLOSED',
      name: 'Business Name',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      owner: 'Bill Trust',
      profile : '/room-booking_details-page/by-profile.png'
    },
    {
      id: 5,
      banner: '/room-booking_details-page/room.jpg',
      logo: '/room-booking_details-page/Novotel London Canary.png',
      views: 0,
      category: 'Restaurant',
      status: 'CLOSED',
      name: 'Business Name',
      rating: 4.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      owner: 'Bill Trust',
      profile : '/room-booking_details-page/by-profile.png'
    }
  ];

  
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

  places = [
    {
      image: '/room-booking_details-page/place.jpg',
      placeTitle: 'Time Square',
      km: '2.5',
      placeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/room-booking_details-page/place.jpg',
      placeTitle: 'Time Square',
      km: '2.5',
      placeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/room-booking_details-page/place.jpg',
      placeTitle: 'Time Square',
      km: '2.5',
      placeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/room-booking_details-page/place.jpg',
      placeTitle: 'Time Square',
      km: '2.5',
      placeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/room-booking_details-page/place.jpg',
      placeTitle: 'Time Square',
      km: '2.5',
      placeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/room-booking_details-page/place.jpg',
      placeTitle: 'Time Square',
      km: '2.5',
      placeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/room-booking_details-page/place.jpg',
      placeTitle: 'Time Square',
      km: '2.5',
      placeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/room-booking_details-page/place.jpg',
      placeTitle: 'Time Square',
      km: '2.5',
      placeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

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

  faqQuestions = [
    {
      id: 1,
      question:'What Amenities Are Included In The Hotel Room?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      question:'Is There A Check-In/Check-Out Time?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      question:'Can I Request A Specific Room Type Or View?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 4,
      question:'Are Pets Allowed In The Hotel Rooms?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 5,
      question:'What Amenities Are Included In The Hotel Room?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id:6,
      question:'Do You Offer Housekeeping During My Stay?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]

  isFaqQuestionOpen = false
 
  //BOOK HOTEL

  isBookHotelOpen = false
  toggleBookHotelOpen(){
    this.isBookHotelOpen=!this.isBookHotelOpen
  }


  //right-section

  //Date 
isCheckinBoxOpen=false;
isCheckoutBoxOpen=false;
toggleCheckinBoxOpen(){
}
toggleCheckoutBoxOpen(){
}
indate: Date | undefined;
outdate: Date | undefined;

//Count
  room: number = 1;
  adult: number = 1;
  children: number = 1;

  //Room Type
  value='';
isRoomBoxOpen= false;
toggleRoomBoxOpen(){
  this.isRoomBoxOpen = !this.isRoomBoxOpen;
}

isExtraService = false;
toggleExtraServiceOpen(){
  this.isExtraService =! this.isExtraService
}

//special offer

 images: any = [
  { itemImageSrc:'/room-booking_details-page/special-offers.png'},
 { itemImageSrc:'/room-booking_details-page/special-offers.png'},
 { itemImageSrc:'/room-booking_details-page/special-offers.png'},
 { itemImageSrc:'/room-booking_details-page/special-offers.png'}
 ];
    responsiveOptions: any[] | undefined;

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
  
}