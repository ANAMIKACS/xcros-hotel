# Hotel Vertical Integration Guide -> Admin & Frontend

This document outlines the API endpoints, data models, and integration strategies required to connect your Angular frontend and Admin Panel to the new Hotel Vertical backend.

---

## Table of Contents
1. [Base URL & Request Configuration](#1-base-url--request-configuration)
2. [Module Statistics (Admin Dashboard)](#2-module-statistics-admin-dashboard)
3. [Hotel Listings Management](#3-hotel-listings-management)
4. [Hotel Categories Management](#4-hotel-categories-management)
5. [Hotel Testimonials Management](#5-hotel-testimonials-management)
6. [Hotel Advertisements Management](#6-hotel-advertisements-management)
7. [Hotel Locations](#7-hotel-locations)
8. [Angular Integration Examples](#8-angular-integration-examples)

---

## 1. Base URL & Request Configuration

All endpoints are prefixed with `/api/hotel` and assume you have standard domain middleware interceptor active on your frontend. 

**Base Paths:**
- Listings: `/api/hotel/listings`
- Categories: `/api/hotel/categories`
- Testimonials: `/api/hotel/testimonials`
- Advertisements: `/api/hotel/advertisements`
- Locations: `/api/hotel/locations`

> **Note**: For routes restricted to logged-in users or admins, ensure the `Authorization` header containing the valid JWT token is attached by your HTTP interceptor.

---

## 2. Module Statistics (Admin Dashboard)

Provides quick overview metrics for the hotel module, primarily to populate the 4 summary widgets on the admin dashboard. 

**This endpoint is 100% dynamic and calculated in real-time.** 
The stats are generated automatically using MongoDB aggregation pipelines directly on your active data.
- **Locations**: Extracts the count of unique cities dynamically from all active Hotel documents.
- **Properties**: Extracts the total count of active Hotel documents.
- **Ratings**: Aggregates the total sum of all user reviews/ratings across all hotels.
- **Bookings**: Returns `0` for now (reserved for the bookings module).

**Endpoint:** `GET /api/hotel/listings/stats`

**Response Example:**
```json
{
  "success": true,
  "data": {
    "locations": 15, // Automatically calculated unique cities
    "properties": 120, // Automatically calculated total active hotels
    "bookings": 0,
    "ratings": 450 // Automatically calculated sum of reviews
  }
}
```

---

## 3. Hotel Listings Management

These endpoints handle the core properties that users will browse and book.

### 3.1 Fetch All Hotels (with Filtering)
**Endpoint:** `GET /api/hotel/listings`

**Query Parameters:**
- `type` (Hotel, Villa, Resort, Cottage, Bungalow, Apartment)
- `city`
- `minPrice` / `maxPrice`
- `stars` (1-5)
- `isFeatured` (true/false)
- `isExclusiveOffer` (true/false)
- `sortBy` (default: createdAt)
- `order` (asc / desc)
- `page` (default: 1)
- `limit` (default: 10)

### 3.2 Fetch Single Hotel
**Endpoint:** `GET /api/hotel/listings/:id`

### 3.3 Create Hotel (Admin/Agent)
**Endpoint:** `POST /api/hotel/listings`

**Expected Model Fields:**
- `title` (String, required): Name of the hotel.
- `type` (String, required): "Hotel", "Villa", "Resort", "Cottage", "Bungalow", "Apartment".
- `category` (ObjectId): Reference to a HotelCategory.
- `cardImage` (String): Main image for the listing card.
- `profileImage` (String): Logo or owner image.
- `galleryImages` (Array of Strings): Images for the detail slider.
- `stars` (Number): 1 to 5 stars.
- `rooms` / `bathrooms` (Number): Room configuration.
- `size` (String): Size text (e.g., "8x9 m2").
- `pricePerNight` (Number, required): Nightly rate.
- `location` (Object): Needs { `city`, `address`, `pincode`, `coordinates`: { `lat`, `lng` } }.
- `amenities` (Array of Strings): E.g., ["wifi", "pool"].
- `description` (String): Full details.
- `cancelationRules` (String)
- `houseRules` (Object): Needs { `checkIn`, `checkOut`, `floors`, `totalRooms`, `lastRenovation` }.
- `isFeatured` / `isExclusiveOffer` / `isPromoted` (Boolean): For sections/tags.
- Agent details: `agentName`, `agentProfile`, `agentDesignation`, `businessLogo`, `businessName`, `ownerName`, `ownerEmail`, `ownerPhone`.

**Payload Example:**
```json
{
  "title": "Grand Plaza Resort",
  "type": "Resort",
  "pricePerNight": 250,
  "stars": 5,
  "location": {
    "city": "Mumbai",
    "address": "123 Plaza Avenue",
    "pincode": "400001"
  },
  "isFeatured": true
}
```

### 3.4 Update Hotel (Admin/Agent)
**Endpoint:** `PUT /api/hotel/listings/:id`

### 3.5 Delete/Deactivate Hotel (Admin)
**Endpoint:** `DELETE /api/hotel/listings/:id`
*(Note: Uses soft delete by toggling `isActive: false`)*

---

## 4. Hotel Categories Management

Handles the dynamic category swiper on the frontend.

### 4.1 Create Category (Admin)
**Endpoint:** `POST /api/hotel/categories`

**Expected Model Fields:**
- `name` (String, required): Name of the category (e.g., "Luxury Villas").
- `image` (String, required): URL of the category background image.
- `icon` (String, optional): CSS class or URL for the icon (e.g., "fa-solid fa-house").
- `slug` (String): Automatically generated by backend based on name.

**Payload Example:**
```json
{
  "name": "Luxury Villas",
  "image": "https://cloudinary.com/.../villas.jpg",
  "icon": "fa-solid fa-house"
}
```

### 4.2 Fetch Categories
**Endpoint:** `GET /api/hotel/categories`

---

## 5. Hotel Testimonials Management

Manages customer reviews highlighted on the landing page.

### 5.1 Create Testimonial (Admin)
**Endpoint:** `POST /api/hotel/testimonials`

**Expected Model Fields:**
- `name` (String, required): Name of the person.
- `designation` (String, optional): Title or role (e.g., "Guest").
- `description` (String, required): The actual review text.
- `profileImage` (String, optional): URL of user's avatar.
- `roomImage` (String, optional): URL of the background/context image.
- `quotesIcon` (String, optional): URL for quotes styling.
- `rating` (Number, optional): Rating from 1 to 5.
- `order` (Number, optional): For ordering sequence in frontend.
- `isActive` (Boolean, default: true).

**Payload Example:**
```json
{
  "name": "Jane Doe",
  "designation": "Guest",
  "description": "Amazing stay with wonderful service!",
  "rating": 5,
  "profileImage": "https://link/avatar.jpg",
  "roomImage": "https://link/room.jpg"
}
```

### 5.2 Fetch Testimonials
**Endpoint:** `GET /api/hotel/testimonials`

---

## 6. Hotel Advertisements Management

Manages promotional banners specific to the hotel vertical.

### 6.1 Create Advertisement (Admin)
**Endpoint:** `POST /api/hotel/advertisements`

**Expected Model Fields:**
- `title` (String, optional): Ad headline.
- `category` (String, optional): Tag or ad grouping.
- `description` (String, optional): Ad subtext.
- `businessName` (String, optional): Sponsoring business.
- `mail` / `mobile` (String, optional): Contact details attached to ad.
- `desktop_image` (String, optional): High-res landscape image URL.
- `mobile_image` (String, optional): Portrait/square image URL.
- `popup_image` (String, optional): Optional image for modal CTA.
- `status` (String, default: "Active").

**Payload Example:**
```json
{
  "title": "Summer Sale 20% Off",
  "businessName": "Travel Co",
  "desktop_image": "https://link/desktop.jpg",
  "mobile_image": "https://link/mobile.jpg",
  "status": "Active"
}
```

### 6.2 Fetch Advertisements
**Endpoint:** `GET /api/hotel/advertisements`
*(Note: Calling this endpoint automatically increments the `view_count` on active ads)*

### 6.3 Increment Lead Count (Frontend/Action)
**Endpoint:** `PUT /api/hotel/advertisements/:id/lead`
*(Note: Call this when a user clicks the ad or submits an inquiry)*

---

## 7. Hotel Locations

Retrieves distinct cities/locations configured for filtering.

### 7.1 Fetch Locations
**Endpoint:** `GET /api/hotel/locations`

---

## 8. Angular Integration Examples

Below are quick examples of how to consume these endpoints in your Angular Service (`hotel.service.ts`).

### Hotel Service Wrapper
```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseUrl = `${environment.apiUrl}/api/hotel`;

  constructor(private http: HttpClient) {}

  // 1. Dashboard Stats
  getDashboardStats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listings/stats`);
  }

  // 2. Hotel Listings with filtering
  getHotels(filters: any): Observable<any> {
    let params = new HttpParams();
    Object.keys(filters).forEach(key => {
      if(filters[key]) {
        params = params.append(key, filters[key]);
      }
    });
    return this.http.get(`${this.baseUrl}/listings`, { params });
  }

  // 3. Categories
  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  // 4. Testimonials
  getTestimonials(): Observable<any> {
    return this.http.get(`${this.baseUrl}/testimonials`);
  }

  // 5. Submit Ad Lead
  registerAdClick(adId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/advertisements/${adId}/lead`, {});
  }
}
```

### Example Admin Dashboard Component
```typescript
import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.component.html'
})
export class HotelDashboardComponent implements OnInit {
  stats = { locations: 0, properties: 0, bookings: 0, ratings: 0 };

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getDashboardStats().subscribe(res => {
      if(res.success) {
        this.stats = res.data;
      }
    });
  }
}
```
