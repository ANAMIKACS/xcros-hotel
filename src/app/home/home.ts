import { Component, OnInit, OnDestroy  } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
// import { Hoteldiscount } from "../hoteldiscount/hoteldiscount";
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';



@Component({
  selector: 'app-home',
  imports: [CommonModule, AvatarModule, FormsModule, DatePickerModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

   isLocationOpen = true;

  locations = ['Dhaka','Noakhali','Cumilla'];

  selectedLocation = 'Dhaka';

  toggleLocation(){
    this.isLocationOpen = !this.isLocationOpen;
  }

  selectLocation(city:string){
    this.selectedLocation = city;
    this.isLocationOpen = false;
  }

  checkInDate:any;
  checkOutDate:any;

//
// islocationOpen= false;
// toggleDropdown(){
//   this.islocationOpen = !this.islocationOpen;
// }

  categoriesAnimation ='';
showCategory(){
    this.categoriesAnimation = 'animate__slideInUp animate__faster';
  }

  hideCategory(){
    this.categoriesAnimation = 'animate__slideOutDown animate__faster';
  }
  villa='/home/villa-icon.png';
  categoryCards =[
    {
     id:1,
     icon:'/home/villa-icon.png',
    cardtitle: 'Villa',
    categoryItem: '2 Items',
    },
    {
     id:2,
     icon:'/home/hotel-icon.png',
    cardtitle: 'Hotel',
    categoryItem: '4 Items',
    },
    {
     id:3,
     icon:'/home/resort-icon.png',
    cardtitle: 'Resort  ',
    categoryItem: '12 Items',
    },
    {
     id:4,
     icon:'/home/cottage-icon.png',
    cardtitle: 'Cottage',
    categoryItem: '8 Items',
    },
    {
     id:5,
     icon:'/home/villa-icon.png',
    cardtitle: 'Bungalow',
    categoryItem: '6 Items',
    },
    {
     id:6,
     icon:'/home/apartment.png',
    cardtitle: 'Apartment',
    categoryItem: '4 Items',
    }
  ]
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
//Offers
offersAnimation ='';
showCards(){
  this.offersAnimation='animate__slideInUp animate__faster';
}
hideCards(){
  this.offersAnimation='animate__slideOutDown animate__faster';
}
offersCard=[
  {
    id:1,
    OfferTitle:'Take Advantage of our Seasonal Specials',
  },
   {
    id:2,
    OfferTitle:'Offers on room rates, restaurants and spas',
  },
   {
    id:3,
    OfferTitle:'Exceptional Savings, exclusively for Members',
  },
]
  //Featured Section
  featuredbg='/home/Featuredsectionbg.png';
  featuresAnimation='';
  isFeaturedBoxOpen=false;
  toggleFeaturedBox(){
    this.isFeaturedBoxOpen= !this.isFeaturedBoxOpen
  }
  
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
];

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
  ]
}
