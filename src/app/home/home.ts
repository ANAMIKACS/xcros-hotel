import { Component, OnInit, OnDestroy,  AfterViewInit, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
// import { Hoteldiscount } from "../hoteldiscount/hoteldiscount";
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { register } from 'swiper/element/bundle';
register();

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  imports: [CommonModule, AvatarModule, FormsModule, DatePickerModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home implements AfterViewInit {

@ViewChild('heroSection') heroSection!: ElementRef;

ngAfterViewInit(): void {
  this.initHeroAnimation();
  this.initCategoryAnimation();
  this.initOffersAnimation();
  this.initFeaturedAnimation();
  this.initPromoAnimation();
  this.initExclusiveOfferAnimation();
  this.initAdvertismentAnimation();
}

initHeroAnimation() {

  const section = this.heroSection.nativeElement;

  const titles = section.querySelectorAll('.hero-item');
  const locationtitles = section.querySelectorAll('.card-item');
  gsap.set(titles, { y: 50 , autoAlpha:0 } );
  gsap.set(locationtitles, { x: -50 ,autoAlpha:0 });

  section.addEventListener('mouseenter', () => {

    gsap.to(titles, {
      y: 0,
      autoAlpha:1,
      duration: 0.45,
      ease: "back.out(1.6)"
    });

    gsap.to(locationtitles, {
      x: 0,
      autoAlpha:1,
      duration: 0.45,
      ease: "power3.out"
    });

  });

  section.addEventListener('mouseleave', () => {

    gsap.to(titles, {
      y: 115,
      autoAlpha:0,
      duration: 0.35,
      ease: "power2.in"
    });

    gsap.to(locationtitles, {
      x: -1100,
      autoAlpha:0,
      duration: 0.35,
      ease: "power2.in"
    });

  });

}
   isLocationOpen = false;
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

//Categories
@ViewChild('categoriesSection') categoriesSection!: ElementRef;
initCategoryAnimation(){

   const section = this.categoriesSection.nativeElement;

   const titles = section.querySelectorAll('.category-item');
   const cards = section.querySelectorAll('.category-card');
   gsap.set(titles, { y: 50, autoAlpha:0 });
  gsap.set(cards, { y: 50, autoAlpha:0 } );
   section.addEventListener('mouseenter', () => {

      gsap.to(titles, {
        y: 0,
        autoAlpha:1,
        duration: 0.45,
        ease: "back.out(1.6)"
      });

        gsap.to(cards, {
        y: 0,
        autoAlpha:1,
        duration: 0.45,
        ease: "back.out(1.6)"
      });

    });

    section.addEventListener('mouseleave', () => {

      gsap.to(titles, {
        y: 220,
        autoAlpha:0,
        duration: 0.35,
        ease: "power2.in"
      });
       gsap.to(cards, {
        y: 220,
        autoAlpha:0,
        duration: 0.35,
        ease: "power2.in"
      });

    });
    
}
  // villa='/home/villa-icon.png';
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

//Advertisment
@ViewChild('advertismentSection') advertismentSection!: ElementRef;
initAdvertismentAnimation(){

const section = this.advertismentSection.nativeElement;

const title = section.querySelector('.ad-title-anim');
const contents = section.querySelectorAll('.img-contents');
const cards = section.querySelectorAll('.ad-col');

gsap.set(title,{y:-80,autoAlpha:0});
gsap.set(contents,{y:80,autoAlpha:0});

section.addEventListener('mouseenter',()=>{

const tl = gsap.timeline();

tl.to(title,{
y:0,
duration:0.6,
autoAlpha:1,
ease:"power3.out"
})

.to(contents,{
y:0,
duration:0.6,
stagger:0.2,
autoAlpha:1,
ease:"power3.out"
},"-=0.3");

});

section.addEventListener('mouseleave',()=>{

gsap.to(title,{
y:-80,
duration:0.4,
autoAlpha:0
});

});

cards.forEach((card:any)=>{

card.addEventListener('mouseenter',()=>{

gsap.to(cards,{
flex:1,
duration:0.5,
ease:"power3.out"
});

gsap.to(card,{
flex:2.5,
duration:0.5,
ease:"power3.out"
});

gsap.to(card.querySelector('.ad-banner img'),{
scale:1.1,
duration:0.6,
ease:"power3.out"
});

});

card.addEventListener('mouseleave',()=>{

gsap.to(cards,{
flex:1,
duration:0.5,
ease:"power3.out"
});

gsap.to(card.querySelector('.ad-banner img'),{
scale:1,
duration:0.6,
ease:"power3.out"
});

});

});

}
//Offers
@ViewChild('offersSection') offersSection!: ElementRef;
initOffersAnimation(){
  const section = this.offersSection.nativeElement;

  const titles = section.querySelectorAll('.offerscard-item');
 gsap.to(titles, {y: 240,autoAlpha:0});
   section.addEventListener('mouseenter', () => {
   

      gsap.to(titles, {
        y: 0,
        duration: 0.45,
        autoAlpha:1,
        ease: "back.out(1.6)"
      });

    });

    section.addEventListener('mouseleave', () => {
      
      gsap.to(titles, {
        y: 240,
        duration: 0.45,
        autoAlpha:0,
        ease: "power2.in"
      });

    });
}
offersCard=[
  {
    id:1,
    OfferTitle:'Take Advantage of our \nSeasonal Specials',
  },
   {
    id:2,
    OfferTitle:'Offers on room rates, \nrestaurants and spas',
  },
   {
    id:3,
    OfferTitle:'Exceptional Savings, \nexclusively for Members',
  },
]

  //Featured Section
  @ViewChild('featuredSection') featuredSection!: ElementRef;
  initFeaturedAnimation(){
     const section = this.featuredSection.nativeElement;

     const titles = section.querySelectorAll('.feature-item');
     const cards = section.querySelectorAll('.featured-card');
       gsap.set(titles, { y: 50 , autoAlpha:0 } );
     section.addEventListener('mouseenter', () => {

      gsap.to(titles, {
        y: 0,
        duration: 0.45,
        autoAlpha:1,
        ease: "back.out(1.6)"
      });

    });

    section.addEventListener('mouseleave', () => {

      gsap.to(titles, {
        y: 240,
        autoAlpha:0,
        duration: 0.45,
        ease: "power2.in"
      });

    });

 gsap.set(cards,{
  x:-500,
  opacity:0
});

section.addEventListener('mouseenter',()=>{

  const tl = gsap.timeline();
  tl.to(cards,{
    x:0,
    opacity:1,
    duration:0.5,
    stagger:0.05,
    ease:"power3.out"
  })

  .to({}, {duration:0.4})
     .to(cards[0],{ x:0, duration:0.3 })
  .to(cards[1],{ x:0, duration:0.3 })
  .to(cards[2],{ x:0, duration:0.3 })
  .to(cards[3],{ x:0, duration:0.3 });
});

section.addEventListener('mouseleave',()=>{

  gsap.to(cards,{
    x:-500,
    opacity:0,
    duration:0.4,
    stagger:0.05
  });

});

  }
  featuredbg='/home/Featuredsectionbg.png';
  isFeaturedBoxOpen=false;
  options=['Featured', 'Recent', 'Popular', 'Recommended']
  selectedOption:string='Featured';
  toggleFeaturedBox(){
    this.isFeaturedBoxOpen= !this.isFeaturedBoxOpen
  }
   selectOption(option: string) {
    this.selectedOption = option; 
    this.isFeaturedBoxOpen = false; 
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
//Promo Section
@ViewChild('promoSection') promoSection!: ElementRef;

initPromoAnimation(){
   const section = this.promoSection.nativeElement;
    const image = section.querySelector('.promo-image');
    const cards = section.querySelectorAll('.stas-cards')

    gsap.set(image,{
  scale:0.85
  });

gsap.set(cards,{ y:50, autoAlpha:0 });
section.addEventListener('mouseenter',()=>{

  gsap.to(image,{
    scale:1,
    duration:0.9,
    ease:"back.out(1.6)"   
  });

});

section.addEventListener('mouseleave',()=>{

  gsap.to(image,{
    scale:0.85,
    duration:0.5,
    ease:"power2.out"
  });

});

section.addEventListener('mouseenter', () => {

      gsap.to(cards, {
        y: 0,
        duration: 0.45,
        autoAlpha:1,
        ease: "back.out(1.6)"
      });

    });

    section.addEventListener('mouseleave', () => {

      gsap.to(cards, {
        y: 240,
        autoAlpha:0,
        duration: 0.45,
        ease: "power2.in"
      });

    });
}

//Exclusive Offer HOTEL
@ViewChild('exclusiveOfferSection') exclusiveOfferSection!: ElementRef;
initExclusiveOfferAnimation(){
  const section = this.exclusiveOfferSection.nativeElement;
  const banner = section.querySelector('.offer-banner');
  const cards = section.querySelectorAll('.hotel-card');

gsap.set(banner,{ y:300, autoAlpha:0 });
    gsap.set(cards,{ x:300, opacity:0, autoAlpha:0 });

  section.addEventListener('mouseenter', () => {

    const tl = gsap.timeline();
    tl.to(banner,{
      y:0,
      duration:0.45,
      autoAlpha:1,
      ease:"back.out(1.6)"
    })

    .to(cards,{
      x:0,
      opacity:1,
      duration:0.6,
      stagger:0.15,
      autoAlpha:1,
      ease:"power3.out"
    },"-=0.2");

  });

  section.addEventListener('mouseleave', () => {

    gsap.to(banner,{
      y:550,
      duration:0.45,
      autoAlpha:0,
      ease:"power2.in"
    });

    gsap.to(cards,{
      y:500,
      opacity:0,
      duration:0.45,
      // stagger:0.1,
      autoAlpha:0,
      ease:"power2.in"
    });

  });

  
}
  exclusiveofferHotels=[
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
