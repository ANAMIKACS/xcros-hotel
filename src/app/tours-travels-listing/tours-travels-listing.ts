import { Component, ViewChild } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { Dialog, DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { PopoverModule } from 'primeng/popover';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-tours-travels-listing',
  imports: [CarouselModule, ButtonModule, DrawerModule, DialogModule, InputTextModule, CommonModule, FormsModule, SliderModule, PopoverModule],
  templateUrl: './tours-travels-listing.html',
  styleUrl: './tours-travels-listing.scss',
})
export class ToursTravelsListing {
//image Grid
@ViewChild('image') carousel!: Carousel
  position: 'left' = "left";

prev() {
  if (this.carousel.page > 0) {
    this.carousel.page = this.carousel.page - 1;
  } else {
    // if circular enabled
    this.carousel.page = this.getTotalPages() - 1;
  }
}

next() {
  if (this.carousel.page < this.getTotalPages() - 1) {
    this.carousel.page = this.carousel.page + 1;
  } else {
    // if circular enabled
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
      {
        itemImageSrc : '/listingpage/imagegrid.jpg'
      },
      {
        itemImageSrc : '/listingpage/travel.png'
      },
      {
        itemImageSrc : '/listingpage/imagegrid.jpg'
      },
      {
        itemImageSrc : '/listingpage/imagegrid.jpg'
      },
      {
        itemImageSrc : '/listingpage/imagegrid.jpg'
      }

    ]
    this.cards = [
    {
      id:1,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:2,
     image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:3,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:4,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
     {
      id:5,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:6,
     image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:7,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:8,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
     {
      id:9,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:10,
     image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:11,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:12,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    }
  ];
  this.promotedListingCards = [
    {
      id:1,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:2,
     image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:3,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    },
    {
      id:4,
      image: '/listingpage/travel.png',
      category: 'Eco Tourism',
      rating: 5.0,
      reviews: 105,
      destinationName: 'Barcelona City Tour',
      location: 'Ciutat Vella, Barcelona',
      price: 500,
      oldPrice: 780,
      duration: '4 days, 3 nights'
    }
  ]

  }

//filters
result = 'city name'
visible: boolean = false;
showDialog(position: 'left') {
        this.position = position;
        this.visible = true;
    }
isFilterOpen = false;

//page wraper

overlay() {
  this.isFilterOpen = true;
}

closeFilter() {
  this.isFilterOpen = false;
}
isFeatureBoxOpen = false;
isViewMapOpen = false;

//close button
close(){
this.isFilterOpen = false;
}

isDestinationOpen = false;
headerDestinationOpen(){
 this.isDestinationOpen = !this.isDestinationOpen;
}
isGuestOpen = false;
headerGuestOpen(){
  this.isGuestOpen = !this.isGuestOpen;
}

//more-option

isMoreOptionOpen = false
toggleMoreOption(){
  this.isMoreOptionOpen = !this.isMoreOptionOpen;
}


//tabs inside more option

isStarRatingOpen = false
headerStarRatingOpen(){
  this.isStarRatingOpen = !this.isStarRatingOpen;
}

isAmenitiesOpen = false
headerAmenitiesOpen(){
  this.isAmenitiesOpen = !this.isAmenitiesOpen;
}

isActivitiesOpen = false
headerActivitiesOpen(){
 this.isActivitiesOpen = !this.isActivitiesOpen;
}

isTimeOfDayOpen = false
headerTimeOfDayOpen(){
  this.isTimeOfDayOpen = !this.isTimeOfDayOpen;
}

isNeighbourhoodOpen = false
headerNeighbourhoodOpen(){
  this.isNeighbourhoodOpen = !this.isNeighbourhoodOpen;
}

isDealsOpen = false
headerDealsOpen(){
  this.isDealsOpen = !this.isDealsOpen;
}
rangeValues: number[] = [0, 10000];
priceRangeValues : number[] = [0, 10000];

dropdown() {
  this.isFeatureBoxOpen = !this.isFeatureBoxOpen;
}


//MEDIA DROPDOWN
 value = '';
 isFeaturedOpen = false;
  selectedFeatured = 'Featured';
  featuredOptions = [
    'Rating L<H',
    'feature',
    'Rating H>L',
  ];
  toggleFeatured() {
    this.isFeaturedOpen = !this.isFeaturedOpen;
  }
  selectFeatured(option: string) {
    this.selectedFeatured = option;
    this.isFeaturedOpen = false;
  }

toggleViewMap() {
  this.isViewMapOpen = !this.isViewMapOpen;
}



//main-section
toggleContactInfo(){
  this.activeContactId = null;
}

activeContactId: number | null = null;

toggleContact(id: number) {
  if (this.activeContactId === id) {
    this.activeContactId = null; 
  } else {
    this.activeContactId = id; 
  }
}

//pagination
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


}
