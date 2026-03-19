import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { Hoteldiscount } from "../hoteldiscount/hoteldiscount";
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { register } from 'swiper/element/bundle';
import { HotelService, FALLBACK_CATEGORIES, FALLBACK_HOTELS, FALLBACK_ADVERTISEMENTS, FALLBACK_LOCATIONS, FALLBACK_STATS } from '../services/hotel.service';
register();

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-home',
  imports: [CommonModule, AvatarModule, FormsModule, DatePickerModule, Hoteldiscount],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home implements OnInit, AfterViewInit {

  private hotelService = inject(HotelService);

  ngOnInit(): void {
    this.hotelService.getLocations().subscribe(data => {
      this.locations = data;
      if (!this.locations.includes(this.selectedLocation)) {
        this.selectedLocation = this.locations[0] ?? '';
      }
    });

    this.hotelService.getCategories().subscribe(data => {
      this.categoryCards = data;
    });

    this.hotelService.getFeaturedHotels().subscribe(data => {
      this.hotelcard = data;
    });

    this.hotelService.getExclusiveOfferHotels().subscribe(data => {
      this.exclusiveofferHotels = data;
    });

    this.hotelService.getAdvertisements().subscribe(data => {
      this.advertisements = data;
    });

    this.hotelService.getDashboardStats().subscribe(data => {
      this.dashboardStats = data;
    });
  }

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

    gsap.fromTo(titles,
      { y: 50, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: 'top 85%' }
      }
    );

    gsap.fromTo(locationtitles,
      { x: -50, autoAlpha: 0 },
      {
        x: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: section, start: 'top 85%' }
      }
    );

  }
  isLocationOpen = false;
  locations: string[] = FALLBACK_LOCATIONS;
  selectedLocation = FALLBACK_LOCATIONS[0];
  advertisements: any[] = FALLBACK_ADVERTISEMENTS;
  dashboardStats = FALLBACK_STATS;
  toggleLocation() {
    this.isLocationOpen = !this.isLocationOpen;
  }

  selectLocation(city: string) {
    this.selectedLocation = city;
    this.isLocationOpen = false;
  }

  checkInDate: any;
  checkOutDate: any;

  //Categories
  @ViewChild('categoriesSection') categoriesSection!: ElementRef;
  initCategoryAnimation() {

    const section = this.categoriesSection.nativeElement;
    const titles = section.querySelectorAll('.category-item');
    const cards = section.querySelectorAll('.category-card');

    gsap.fromTo(titles,
      { y: 50, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

    gsap.fromTo(cards,
      { y: 50, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

  }
  categoryCards: any[] = FALLBACK_CATEGORIES;

  //Advertisment
  @ViewChild('advertismentSection') advertismentSection!: ElementRef;
  initAdvertismentAnimation() {

    const section = this.advertismentSection.nativeElement;
    const title = section.querySelector('.ad-title-anim');
    const contents = section.querySelectorAll('.img-contents');
    const cards = section.querySelectorAll('.ad-col');

    gsap.fromTo(title,
      { y: -80, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

    gsap.fromTo(contents,
      { y: 80, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

    cards.forEach((card: any) => {

      card.addEventListener('mouseenter', () => {

        gsap.to(cards, {
          flex: 1,
          duration: 0.5,
          ease: "power3.out"
        });

        gsap.to(card, {
          flex: 2.5,
          duration: 0.5,
          ease: "power3.out"
        });

        gsap.to(card.querySelector('.ad-banner img'), {
          scale: 1.1,
          duration: 0.6,
          ease: "power3.out"
        });

      });

      card.addEventListener('mouseleave', () => {

        gsap.to(cards, {
          flex: 1,
          duration: 0.5,
          ease: "power3.out"
        });

        gsap.to(card.querySelector('.ad-banner img'), {
          scale: 1,
          duration: 0.6,
          ease: "power3.out"
        });

      });

    });

  }
  //Offers
  @ViewChild('offersSection') offersSection!: ElementRef;
  initOffersAnimation() {
    const section = this.offersSection.nativeElement;
    const titles = section.querySelectorAll('.offerscard-item');

    gsap.fromTo(titles,
      { y: 60, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );
  }
  offersCard = [
    {
      id: 1,
      OfferTitle: 'Take Advantage of our \nSeasonal Specials',
    },
    {
      id: 2,
      OfferTitle: 'Offers on room rates, \nrestaurants and spas',
    },
    {
      id: 3,
      OfferTitle: 'Exceptional Savings, \nexclusively for Members',
    },
  ]

  //Featured Section
  @ViewChild('featuredSection') featuredSection!: ElementRef;
  initFeaturedAnimation() {
    const section = this.featuredSection.nativeElement;
    const titles = section.querySelectorAll('.feature-item');
    const cards = section.querySelectorAll('.featured-card');

    gsap.fromTo(titles,
      { y: 50, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

    gsap.fromTo(cards,
      { x: -80, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

  }
  featuredbg = '/home/Featuredsectionbg.png';
  isFeaturedBoxOpen = false;
  options = ['Featured', 'Recent', 'Popular', 'Recommended']
  selectedOption: string = 'Featured';
  toggleFeaturedBox() {
    this.isFeaturedBoxOpen = !this.isFeaturedBoxOpen
  }
  selectOption(option: string) {
    this.selectedOption = option;
    this.isFeaturedBoxOpen = false;
  }
  hotelcard: any[] = FALLBACK_HOTELS;

  //Contact Popup
  closePopup() {
    this.activeContactId = null;
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

  initPromoAnimation() {
    const section = this.promoSection.nativeElement;
    const image = section.querySelector('.promo-image');
    const cards = section.querySelectorAll('.stas-cards');

    gsap.fromTo(image,
      { scale: 0.85, autoAlpha: 0 },
      {
        scale: 1, autoAlpha: 1, duration: 0.9, ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

    gsap.fromTo(cards,
      { y: 50, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: 'top 70%' }
      }
    );
  }

  //Exclusive Offer HOTEL
  @ViewChild('exclusiveOfferSection') exclusiveOfferSection!: ElementRef;
  initExclusiveOfferAnimation() {
    const section = this.exclusiveOfferSection.nativeElement;
    const banner = section.querySelector('.offer-banner');
    const cards = section.querySelectorAll('.hotel-card');

    gsap.fromTo(banner,
      { y: 80, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.7, ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

    gsap.fromTo(cards,
      { x: 80, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: section, start: 'top 75%' }
      }
    );

  }
  exclusiveofferHotels: any[] = FALLBACK_HOTELS.slice(0, 2);

  onAdClick(adId: string): void {
    this.hotelService.registerAdClick(adId).subscribe();
  }

}
