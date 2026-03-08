import { Component, OnInit, OnDestroy  } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hoteldiscount',
  imports: [CommonModule, AvatarModule],
  templateUrl: './hoteldiscount.html',
  styleUrl: './hoteldiscount.scss',
})
export class Hoteldiscount  {
   // Discount Section
 discounts = [
    {
      image: '/home/feature-hotel.png',
      topTitle: 'See all the Featured Hotels',
      boldTitle: 'See all the Featured Hotels',
      buttonText: 'Experiences',
      contentClass: 'featurehotel-content'
    },
    {
      image: '/home/summer-deal.png',
      topTitle: 'Enjoy summer Deals',
      boldTitle: 'Upto 70% Discount!',
      buttonText: 'Learn More',
      contentClass: 'summerdeal-content'
    }
  ];


  // Benefits Section
  animationClass = '';

showCards() {
  this.animationClass = 'animate__slideInUp';
}

hideCards() {
  this.animationClass = 'animate__slideOutDown';
}
  featuresList = [
    {
      image: '/home/custom-care.png',
      title: 'Best Price Guarantee',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: '/home/custom-care.png',
      title: 'Best Price Guarantee',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: '/home/custom-care.png',
      title: 'Best Price Guarantee',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
 


  // Testimonial
 
  currentIndex = 0;
  intervalId: any;

  testimonials = [
    {
      roomImage: '/home/room1.png',
      quotes: '/home/SVG.png',
      title: 'Quality Service',
      description: `In this ever evolving digital world understanding the
      significance of staying ahead.`
    }
  ];

  


}

