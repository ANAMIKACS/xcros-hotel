import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from 'primeng/carousel';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { SliderModule } from 'primeng/slider';
import { Popover, PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-room-booking-listing',
  standalone: true,
  imports: [CommonModule,CarouselModule, ButtonModule, FormsModule, DatePickerModule, InputNumberModule, SliderModule, PopoverModule],
  templateUrl: './room-booking-listing.html',
  styleUrl: './room-booking-listing.scss',
})
export class RoomBookingListing {
@ViewChild('image') carousel!: Carousel
  position: 'left' = "left";
prev() {
  if (this.carousel.page > 0) {
    this.carousel.page = this.carousel.page - 1;
  } else {
    this.carousel.page = this.getTotalPages() - 1;
  }
}

next() {
  if (this.carousel.page < this.getTotalPages() - 1) {
    this.carousel.page = this.carousel.page + 1;
  } else {
    this.carousel.page = 0;
  }
}

getTotalPages(): number {
  return Math.ceil(this.images.length / this.carousel.numScroll);
}
 images: any = [];
 cards: any = [];
 promotedListingCards: any = []
    responsiveOptions: any[] = [
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
];

  ngOnInit() {
    this.images = [
      { itemImageSrc: '/listingpage/imagegrid.jpg' },
      { itemImageSrc: '/listingpage/imagegrid.jpg' },
      { itemImageSrc: '/listingpage/imagegrid.jpg' },
      { itemImageSrc: '/listingpage/imagegrid.jpg' },
      { itemImageSrc: '/listingpage/imagegrid.jpg' },
      { itemImageSrc: '/listingpage/imagegrid.jpg' }
    ];
  }

//
isFeatureBoxOpen = true;
  toggleFeatureBoxOpen() {
    this.isFeatureBoxOpen = !this.isFeatureBoxOpen;
  }

 //
 isViewMapOpen= false;
toggleViewMap() {
  this.isViewMapOpen = !this.isViewMapOpen;
}
 //MEDIA DROPDOWN
 value = '';
 isFeaturedOpen = false;
  selectedFeatured = 'Featured';
  featuredOptions = [
    'Rating H>L',
    'Rating H>L',
    'Rating H>L',
    'Rating H>L',
  ];
  toggleFeatured() {
    this.isFeaturedOpen = !this.isFeaturedOpen;
  }
  selectFeatured(option: string) {
    this.selectedFeatured = option;
    this.isFeaturedOpen = false;
  }

  //HOTEL CARD
  // cardImg="/listingpage/hotelimg.jpg";
  // profileimg='/listingpage/profileimg.jpg';
  hotelcard = [
  {
    id:1,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:2,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:3,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:4,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:5,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:6,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:7,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:8,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:9,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:10,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:11,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:12,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  }
];

//pagenation
  currentPage: number = 1;
  totalPages: number = 4;

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  //PROMOTED HOTEL
  promotedHotels=[
    {
      id:1,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:2,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:3,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  {
    id:4,
    cardImg: '/listingpage/hotelimg.jpg',
    profileimg: '/listingpage/profileimg.jpg',
    stars: 4,
    starArray: Array(4),
    views: 0,
    reviewText: 'Good',
    reviews: 8,
    rating: 4.1,
    hotelType: 'Hotel',
    hotelTitle: 'Moonlight Hotel',
    rooms: 4,
    bathrooms: 3,
    size: '8×9 m2',
    price: 105
  },
  ]
//Page Wrapper
isFilterOpen = false;

overlay() {
  this.isFilterOpen = true;
}
closeFilter() {
  this.isFilterOpen = false;
}

//City box
isCityBoxOpen= false;
toggleCityBoxOpen(){
  this.isCityBoxOpen = !this.isCityBoxOpen;
}
//Hotel box
isHotelBoxOpen= false;
toggleHotelBoxOpen(){
  this.isHotelBoxOpen = !this.isHotelBoxOpen;
}
//Date 
isCheckinBoxOpen=false;
isCheckoutBoxOpen=false;
toggleCheckinBoxOpen(){
}
toggleCheckoutBoxOpen(){
}
date: Date | undefined;

//Count
  room: number = 1;
  adult: number = 1;
  children: number = 1;

//Price slider 
priceRangeValues: number[] = [0, 10000];

//Star Ratings
isRatingBoxOpen= false;
toggleRatingBoxOpen(){
  this.isRatingBoxOpen = !this.isRatingBoxOpen;
}
//Aminities
isAminitiesBoxOpen= false;
toggleAminitiesBoxOpen(){
  this.isAminitiesBoxOpen = !this.isAminitiesBoxOpen;
}

//Distnace Slider
distRangeValues: number[] = [0, 100];

//More Options
isMoreOptionOpen = false
toggleMoreOption(){
  this.isMoreOptionOpen = !this.isMoreOptionOpen;
}

//Facilities
isFacilitiesBoxOpen= false;
toggleFacilitiesBoxOpen(){
  this.isFacilitiesBoxOpen = !this.isFacilitiesBoxOpen;
}

//Room Type
isRoomBoxOpen= false;
toggleRoomBoxOpen(){
  this.isRoomBoxOpen = !this.isRoomBoxOpen;
}

//Style
isStyleBoxOpen= false;
toggleStyleBoxOpen(){
  this.isStyleBoxOpen = !this.isStyleBoxOpen;
}

//Neighbourhood
isNeighbourhoodBoxOpen= false;
toggleNeighbourhoodBoxOpen(){
  this.isNeighbourhoodBoxOpen = !this.isNeighbourhoodBoxOpen;
}

//Deals
isDealsBoxOpen= false;
toggleDealsBoxOpen(){
  this.isDealsBoxOpen = !this.isDealsBoxOpen;
}

//Contact Popup
closePopup(){
  this.activeContactId=null;
}
activeContactId: number | null = null;

togglePopup(id: number) {
  if (this.activeContactId === id) {
    this.activeContactId = null; 
  } else {
    this.activeContactId = id;
  }
}

}
