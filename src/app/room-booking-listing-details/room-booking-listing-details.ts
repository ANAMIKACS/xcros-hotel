import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
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
  imports: [CommonModule, FormsModule, InputNumberModule, DatePickerModule, GalleriaModule, DialogModule, ButtonModule, InputTextModule, CarouselModule],
  templateUrl: './room-booking-listing-details.html',
  styleUrl: './room-booking-listing-details.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoomBookingListingDetails implements OnInit {

  private hotelService = inject(HotelService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const hotelId = this.route.snapshot.paramMap.get('id')
      ?? this.route.snapshot.queryParamMap.get('id');
    if (hotelId) {
      this.hotelService.getHotelById(hotelId).subscribe(hotel => {
        if (hotel) {
          this.populateFromHotel(hotel);
        }
      });
    }
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

rooms = [ 
  { name: 'Standard Family Room', price: 10000, guest: 'Max Guest: 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/room-booking_details-page/room.jpg' }, 
  { name: 'Standard Family Room', price: 10000, guest: 'Max Guest: 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/room-booking_details-page/room.jpg' },
{ name: 'Standard Family Room', price: 10000, guest: 'Max Guest: 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/room-booking_details-page/room.jpg' },
{ name: 'Standard Family Room', price: 10000, guest: 'Max Guest: 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/room-booking_details-page/room.jpg' },
{ name: 'Standard Family Room', price: 10000, guest: 'Max Guest: 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: '/room-booking_details-page/room.jpg' },
 ];


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
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      question:'Is There A Check-In/Check-Out Time?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      question:'Can I Request A Specific Room Type Or View?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 4,
      question:'Are Pets Allowed In The Hotel Rooms?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 5,
      question:'What Amenities Are Included In The Hotel Room?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id:6,
      question:'Do You Offer Housekeeping During My Stay?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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

 offers = [
  '/room-booking_details-page/special-offers.png',
  '/room-booking_details-page/special-offers.png',
  '/room-booking_details-page/special-offers.png'
];


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
  overlay(){
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
  aboutRoomDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

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
  

  Gallery : any = [
     { GalleryImageSrc:'/room-booking_details-page/room.jpg',
      GalleryThambnailImageSrc: '/room-booking_details-page/room.jpg'
     },
       { GalleryImageSrc:'/room-booking_details-page/gallery1.png',
      GalleryThambnailImageSrc: '/room-booking_details-page/gallery1.png'
     },
       { GalleryImageSrc:'/room-booking_details-page/gallery2.png',
      GalleryThambnailImageSrc: '/room-booking_details-page/gallery2.png'
     },
       { GalleryImageSrc:'/room-booking_details-page/gallery3.png',
      GalleryThambnailImageSrc: '/room-booking_details-page/gallery3.png'
     },
       { GalleryImageSrc:'/room-booking_details-page/gallery4.png',
      GalleryThambnailImageSrc: '/room-booking_details-page/gallery4.png'
     },
       { GalleryImageSrc:'/room-booking_details-page/gallery5.png',
      GalleryThambnailImageSrc: '/room-booking_details-page/gallery5.png'
     }
  ]


  isComplementaryOpen = false
  toggleComplimentary(){
    this.isComplementaryOpen=!this.isComplementaryOpen
  }

  amenities = [
  { icon: 'fa-shower', name: 'Shower' },
  { icon: 'fa-socks', name: 'Slippers' },
  { icon: 'fa-table-cells', name: 'Robes' },
  { icon: 'fa-wind', name: 'Air Dryer' },
  { icon: 'fa-tv', name: 'Showers' },
  { icon: 'fa-wifi', name: 'Shampoo' }
];

isRoomFeatureOpen = false;
toggleRoomFeature(){
  this.isRoomFeatureOpen=!this.isRoomFeatureOpen
}
roomFeature = [
  { icon: 'fa-shower', name: 'Shower' },
  { icon: 'fa-socks', name: 'Slippers' },
  { icon: 'fa-table-cells', name: 'Robes' },
  { icon: 'fa-wind', name: 'Air Dryer' },
  { icon: 'fa-tv', name: 'Showers' },
  { icon: 'fa-wifi', name: 'Shampoo' },
  { icon: 'fa-shower', name: 'Shower' },
  { icon: 'fa-socks', name: 'Slippers' },
  { icon: 'fa-table-cells', name: 'Robes' },
  { icon: 'fa-wind', name: 'Air Dryer' },
  { icon: 'fa-tv', name: 'Showers' },
  { icon: 'fa-wifi', name: 'Shampoo' }
]

isServicesAmenities = false;
toggleServicesAmenities(){
  this.isServicesAmenities=!this.isServicesAmenities
}

ServicesAmenities = [
  { icon: 'fa-shower', name: 'Shower' },
  { icon: 'fa-socks', name: 'Slippers' },
  { icon: 'fa-table-cells', name: 'Robes' },
  { icon: 'fa-wind', name: 'Air Dryer' },
  { icon: 'fa-tv', name: 'Showers' },
  { icon: 'fa-wifi', name: 'Shampoo' },
]

CancelationRules = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

//tariff

isTariff = false;
toggleTariff(){
  this.isTariff=!this.isTariff
}

services = [
  { name: 'Air Conditioner', price: 1000 },
  { name: 'Free Internet', price: 1000 },
  { name: 'LED Television', price: 1000 },
  { name: 'Microwave', price: 1000 }
];

//house rules

isHouseRules = false;
toggleHouseRules(){
  this.isHouseRules=!this.isHouseRules
}

houseRulesLeft = [
  {
    title: 'Check-in/Check-out',
    items: [
      'Check-in from 13:00 PM',
      'Check-out until 11:00 AM'
    ]
  },
  {
    title: 'Get Around',
    items: [
      'Distance from city center: 0 km'
    ]
  },
  {
    title: 'The property',
    items: [
      'Number of floors: 8',
      'Number of rooms : 998',
      'Most recent renovation: 2019'
    ]
  }
];

houseRulesRight = [
  {
    title: 'Extras',
    items: [
      'Breakfast charge (unless included in room price): 20 GBP',
      'Still Water Horse Head Statue - 70 m'
    ]
  }
];
}