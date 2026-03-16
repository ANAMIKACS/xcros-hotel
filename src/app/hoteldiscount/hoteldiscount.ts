import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { Button } from "primeng/button";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-hoteldiscount',
  imports: [CommonModule, AvatarModule, InputGroupModule, MenuModule, InputTextModule, Button],
  templateUrl: './hoteldiscount.html',
  styleUrl: './hoteldiscount.scss',
})
export class Hoteldiscount implements AfterViewInit {

  @ViewChild('discountSection') discountSection!: ElementRef;
  @ViewChild('benefitsSection') benefitsSection!: ElementRef;
  @ViewChild('testimonialTitleSection') testimonialTitleSection!: ElementRef;
  // Discount Section

  ngAfterViewInit(): void {
    this.initDiscountAnimation();
    this.initBenefitsAnimation();
    this.initTestimonialTitleAnimation();
    this.initTestimonialAnimation();
    this.initTestimonialHoverAnimation();
    this.initSubscribeAnimation();
    this.initLogoAnimation();
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

    gsap.set(cards, { y: 1370 });

    section.addEventListener('mouseenter', () => {
      gsap.to(cards, {
        y: 0,
        duration: 0.5,
        ease: "back.out(1.6)"
      });
    });

    section.addEventListener('mouseleave', () => {
      gsap.to(cards, {
        y: 1370,
        duration: 0.5,
        ease: "power2.in"
      });
    });

  }



  //partners
  @ViewChild('logosSection') logosSection!: ElementRef;
  logos = [
    { image: '/home/ri_visa-line.png' },
    { image: '/home/logos_mastercard.png' },
    { image: '/home/logos_paypal.png' },
    { image: '/home/logo (2).png' },
    { image: '/home/b..png' },
    { image: '/home/airbnb.png' },
    { image: '/home/ri_visa-line.png' },
    { image: '/home/logos_mastercard.png' },
    { image: '/home/b..png' },
    { image: '/home/airbnb.png' },

  ]
  initLogoAnimation() {

    const container = this.logosSection.nativeElement;
    const logos = container.querySelector('.logos');

    const width = logos.scrollWidth;

    gsap.to(logos, {
      x: -width / 2,
      duration: 1,
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

    gsap.set(cards, { y: 800 });

    section.addEventListener('mouseenter', () => {
      gsap.to(cards, {
        y: 0,
        duration: 0.5,
        ease: "back.out(1.8)"
      });
    });

    section.addEventListener('mouseleave', () => {
      gsap.to(cards, {
        y: 800,
        duration: 0.5,
        ease: "power2.in"
      });
    });

  }

  // Testimonial

  @ViewChild('testimonialWrapper') testimonialWrapper!: ElementRef;
  testimonials = [
    { roomImage: '/home/room1.png', quotes: '/home/SVG.png', title: 'Quality Service', description: 'In this everi evolving digital understand the significance of staying ahead as through our blog invite explore the dynamic our world of IT with us decoding algorithms to unraveling It is a long established.', profileImg: '/home/profile.png', name: 'Matthew C. Lansberry', designation: 'CEO & Founder' },
    { roomImage: '/home/room2.png', quotes: '/home/SVG.png', title: 'Excellent Support', description: 'In this everi evolving digital understand the significance of staying ahead as through our blog invite explore the dynamic our world of IT with us decoding algorithms to unraveling It is a long established.', profileImg: '/home/profile.png', name: 'Matthew C. Lansberry', designation: 'CEO & Founder' },
    { roomImage: '/home/room3.png', quotes: '/home/SVG.png', title: 'Trusted Experience', description: 'In this everi evolving digital understand the significance of staying ahead as through our blog invite explore the dynamic our world of IT with us decoding algorithms to unraveling It is a long established.', profileImg: '/home/profile.png', name: 'Matthew C. Lansberry', designation: 'CEO & Founder' }

  ];
  initTestimonialAnimation() {

    const wrapper = this.testimonialWrapper.nativeElement;
    const cards = wrapper.querySelectorAll('.testimonial-card-container');

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
    const cards = wrapper.querySelectorAll('.testimonial-card-container');

   
    gsap.set(cards, {
      opacity: 0
    });


    wrapper.addEventListener('mouseenter', () => {

      gsap.to(cards, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2
      });

    });


    wrapper.addEventListener('mouseleave', () => {

      gsap.to(cards, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });

    });

  }
  initTestimonialTitleAnimation() {

    const section = this.testimonialTitleSection.nativeElement;
    const titles = section.querySelectorAll('.testimonial-item');

    gsap.set(titles, { y: 100 });

    section.addEventListener('mouseenter', () => {

      gsap.to(titles, {
        y: 0,
        duration: 0.5,
        ease: "back.out(1.6)"
      });

    });

    section.addEventListener('mouseleave', () => {

      gsap.to(titles, {
        y: 100,
        duration: 0.5,
        ease: "power2.in"
      });

    });

  }

  //connect
  @ViewChild('connectSection') connectSection!: ElementRef;

  initConnectSection() {

    const section = this.connectSection.nativeElement;

    const leftCard = section.querySelector('.local-agent');
    const middleCard = section.querySelector('.custom-support');
    const rightCard = section.querySelector('.app');

    
    gsap.set([leftCard, rightCard], { y: 1000 });
    gsap.set(middleCard, { opacity: 0 });

   
    section.addEventListener('mouseenter', () => {

      gsap.to([leftCard, rightCard], {
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      });

      gsap.to(middleCard, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });

    });

  
    section.addEventListener('mouseleave', () => {

      gsap.to([leftCard, rightCard], {
        y: 1000,
        duration: 0.4,
        ease: "power2.in"
      });

      gsap.to(middleCard, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
      });

    });

  }


  //subscribe

  

  @ViewChild('subscribeSection') subscribeSection!: ElementRef;
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }];
  }

  initSubscribeAnimation() {

    const section = this.subscribeSection.nativeElement;
    const cards = section.querySelectorAll('.sign-up');

    gsap.set(cards, { y: 410 });

    section.addEventListener('mouseenter', () => {
      gsap.to(cards, {
        y: 0,
        duration: 0.5,
        ease: "back.out(1.9)"
      });
    });

    section.addEventListener('mouseleave', () => {
      gsap.to(cards, {
        y: 410,
        duration: 0.5,
        ease: "power2.in"
      });
    });

  }
}

