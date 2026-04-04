import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, inject, ChangeDetectorRef } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { Button } from "primeng/button";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HotelService, FALLBACK_TESTIMONIALS } from '../services/hotel.service';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-hoteldiscount',
  imports: [CommonModule, AvatarModule, InputGroupModule, MenuModule, InputTextModule, Button],
  templateUrl: './hoteldiscount.html',
  styleUrl: './hoteldiscount.scss',
})
export class Hoteldiscount implements OnInit, AfterViewInit {
  private cdr = inject(ChangeDetectorRef);

  @ViewChild('discountSection') discountSection!: ElementRef;
  @ViewChild('benefitsSection') benefitsSection!: ElementRef;
  @ViewChild('testimonialTitleSection') testimonialTitleSection!: ElementRef;
  // Discount Section

  ngAfterViewInit(): void {
    this.initDiscountAnimation();
    this.initBenefitsAnimation();
    this.initTestimonialTitleAnimation();
    // initTestimonialHoverAnimation is called after data loads to avoid GSAP hiding an empty wrapper
    this.initSubscribeAnimation();
    this.initConnectSection();
  }


  discounts = [
    {
      image: '/home/feature-hotel.png',
      mobileImage : '/home/featured-hotel-mobileview.png',
      topTitle: 'See all the Featured Hotels',
      boldTitle: 'See all the Featured Hotels',
      buttonText: 'Experiences',
      contentClass: 'featurehotel-content'
    },
    {
      image: '/home/summer-deal.png',
      mobileImage: '/home/summer-deal-mobile-view.png',
      topTitle: 'Enjoy summer Deals',
      boldTitle: 'Upto 70% Discount!',
      buttonText: 'Learn More',
      contentClass: 'summerdeal-content'
    }
  ];
  initDiscountAnimation() {

    const section = this.discountSection.nativeElement;
    const cards = section.querySelectorAll('.discount-card');

    gsap.fromTo(cards,
      { y: 80, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

  }



  //partners
  @ViewChild('logosSection') logosSection!: ElementRef;
  logos: any[] = [];
  initLogoAnimation() {
    if (!this.logos.length) return;
    const container = this.logosSection.nativeElement;
    const logos = container.querySelector('.logos');

    const width = logos.scrollWidth;

    gsap.to(logos, {
      x: -width / 2,
      duration: 5,
      ease: "none",
      repeat: -1
    });

  }

  // Benefits Section



  featuresList = [
    {
      image: '/home/booking.png',
      title: 'Best Price Guarantee',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/home/guarantee.png',
      title: 'Best Price Guarantee',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: '/home/custom-support.png',
      title: 'Best Price Guarantee',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  initBenefitsAnimation() {

    const section = this.benefitsSection.nativeElement;
    const cards = section.querySelectorAll('.benefit-card');

    gsap.fromTo(cards,
      { y: 80, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.8)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

  }

  // Testimonial

  @ViewChild('testimonialWrapper') testimonialWrapper!: ElementRef;
  private hotelService = inject(HotelService);

  testimonials: any[] = [];

  initTestimonialAnimation() {

    const wrapper = this.testimonialWrapper.nativeElement;
    const cards = wrapper.querySelectorAll('.testimonial-card-container');

    if (cards.length < 3) return;

    gsap.set(cards[0], { y: 0, scale: 1, opacity: 1, zIndex: 3 });
    gsap.set(cards[1], { y: 40, scale: 0.95, opacity: 0.7, zIndex: 2 });
    gsap.set(cards[2], { y: 80, scale: 0.9, opacity: 0.5, zIndex: 1 });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(cards[0], { y: 80, scale: 0.9, opacity: 0.5, zIndex: 1, duration: 1 })
      .to(cards[1], { y: 0, scale: 1, opacity: 1, zIndex: 3, duration: 1 }, "<")
      .to(cards[2], { y: 40, scale: 0.95, opacity: 0.7, zIndex: 2, duration: 1 }, "<")

      .to(cards[1], { y: 80, scale: 0.9, opacity: 0.5, zIndex: 1, duration: 1, delay: 3 })
      .to(cards[2], { y: 0, scale: 1, opacity: 1, zIndex: 3, duration: 1 }, "<")
      .to(cards[0], { y: 40, scale: 0.95, opacity: 0.7, zIndex: 2, duration: 1 }, "<")

      .to(cards[2], { y: 80, scale: 0.9, opacity: 0.5, zIndex: 1, duration: 1, delay: 3 })
      .to(cards[0], { y: 0, scale: 1, opacity: 1, zIndex: 3, duration: 1 }, "<")
      .to(cards[1], { y: 40, scale: 0.95, opacity: 0.7, zIndex: 2, duration: 1 }, "<");

  }
  initTestimonialHoverAnimation() {

    const wrapper = this.testimonialWrapper.nativeElement;

    gsap.fromTo(wrapper,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: wrapper, start: 'top 80%' }
      }
    );

  }
  initTestimonialTitleAnimation() {

    const section = this.testimonialTitleSection.nativeElement;
    const titles = section.querySelectorAll('.testimonial-item');

    gsap.fromTo(titles,
      { y: 60, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

  }

  //connect
  @ViewChild('connectSection') connectSection!: ElementRef;

  initConnectSection() {

    const section = this.connectSection.nativeElement;

    const leftCard = section.querySelector('.local-agent');
    const middleCard = section.querySelector('.custom-support');
    const rightCard = section.querySelector('.app');

    
    gsap.fromTo([leftCard, rightCard],
      { y: 80, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, ease: "back.out(1.7)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

    gsap.fromTo(middleCard,
      { y: 40, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out", delay: 0.2,
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

  }


  //subscribe

  

  @ViewChild('subscribeSection') subscribeSection!: ElementRef;
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }];

    this.hotelService.getTestimonials().subscribe(data => {
      this.testimonials = data;
      this.cdr.detectChanges();
      // Wait for Angular to render the cards into the DOM before animating
      setTimeout(() => {
        if (this.testimonialWrapper) {
          this.initTestimonialHoverAnimation();
          ScrollTrigger.refresh();
        }
        this.initTestimonialAnimation();
      }, 100);
    });

    this.hotelService.getPartners().subscribe(data => {
      this.logos = data;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.initLogoAnimation();
        ScrollTrigger.refresh();
      }, 100);
    });
  }

  initSubscribeAnimation() {

    const section = this.subscribeSection.nativeElement;
    const cards = section.querySelectorAll('.sign-up');

    gsap.fromTo(cards,
      { y: 80, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1, duration: 0.6, ease: "back.out(1.9)",
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

  }
}

