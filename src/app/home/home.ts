import { Component, OnInit, OnDestroy, AfterViewInit  } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
// import { Hoteldiscount } from "../hoteldiscount/hoteldiscount";
import { gsap } from "gsap";


@Component({
  selector: 'app-home',
  imports: [CommonModule, AvatarModule,],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit  {
//
// islocationOpen= false;
// toggleDropdown(){
//   this.islocationOpen = !this.islocationOpen;
// }
//  heroAnimation = '';

//   showHero(){
//     this.heroAnimation = 'animate__slideInUp animate__faster';
//   }

//   hideHero(){
//     this.heroAnimation = 'animate__slideOutDown animate__faster';
//   }

ngAfterViewInit() {

    const tl = gsap.timeline();

    tl.from(".hero-tagline", {
      y: 60,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    })

    .from(".hero-title", {
      y: 80,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    })

    .from(".hero-desc", {
      y: 60,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    })

    .from(".choose-hotel", {
      x: -200,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    });

    // Background slow zoom
    gsap.to(".hero-container img", {
      scale: 1.4,
      duration: 10,
      ease: "none"
    });

  }

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
  

}
