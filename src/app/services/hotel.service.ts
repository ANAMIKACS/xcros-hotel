import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, catchError, map } from 'rxjs';
import { environment } from '../../environments/environment';

// ─── Fallback Data ────────────────────────────────────────────────────────────

export const FALLBACK_HOTELS = [
  {
    id: 1, cardImg: '/listingpage/hotelimg.jpg', profileimg: '/listingpage/profileimg.jpg',
    stars: 4, starArray: Array(4), views: 0, reviewText: 'Good', reviews: 8,
    rating: 4.1, hotelType: 'Hotel', hotelTitle: 'Moonlight Hotel',
    rooms: 4, bathrooms: 3, size: '8×9 m2', price: 105
  },
  {
    id: 2, cardImg: '/listingpage/hotelimg.jpg', profileimg: '/listingpage/profileimg.jpg',
    stars: 4, starArray: Array(4), views: 0, reviewText: 'Good', reviews: 8,
    rating: 4.1, hotelType: 'Hotel', hotelTitle: 'Grand Bliss Hotel',
    rooms: 3, bathrooms: 2, size: '7×8 m2', price: 90
  },
  {
    id: 3, cardImg: '/listingpage/hotelimg.jpg', profileimg: '/listingpage/profileimg.jpg',
    stars: 5, starArray: Array(5), views: 0, reviewText: 'Excellent', reviews: 14,
    rating: 4.8, hotelType: 'Resort', hotelTitle: 'Seaside Resort',
    rooms: 6, bathrooms: 4, size: '12×10 m2', price: 220
  },
  {
    id: 4, cardImg: '/listingpage/hotelimg.jpg', profileimg: '/listingpage/profileimg.jpg',
    stars: 3, starArray: Array(3), views: 0, reviewText: 'Average', reviews: 5,
    rating: 3.5, hotelType: 'Cottage', hotelTitle: 'Forest Cottage',
    rooms: 2, bathrooms: 1, size: '5×6 m2', price: 60
  }
];

export const FALLBACK_CATEGORIES = [
  { id: 1, icon: '/home/villa-icon.png',     cardtitle: 'Villa',      categoryItem: '2 Items' },
  { id: 2, icon: '/home/hotel-icon.png',     cardtitle: 'Hotel',      categoryItem: '4 Items' },
  { id: 3, icon: '/home/resort-icon.png',    cardtitle: 'Resort',     categoryItem: '12 Items' },
  { id: 4, icon: '/home/cottage-icon.png',   cardtitle: 'Cottage',    categoryItem: '8 Items' },
  { id: 5, icon: '/home/villa-icon.png',     cardtitle: 'Bungalow',   categoryItem: '6 Items' },
  { id: 6, icon: '/home/apartment.png',      cardtitle: 'Apartment',  categoryItem: '4 Items' }
];

export const FALLBACK_TESTIMONIALS = [
  {
    roomImage: '/home/room1.png', quotes: '/home/SVG.png',
    title: 'Quality Service',
    description: 'In this ever evolving digital world, understand the significance of staying ahead. Through our blog, we invite you to explore the dynamic world of IT with us — decoding algorithms to unraveling the latest trends.',
    profileImg: '/home/profile.png', name: 'Matthew C. Lansberry', designation: 'CEO & Founder'
  },
  {
    roomImage: '/home/room2.png', quotes: '/home/SVG.png',
    title: 'Excellent Support',
    description: 'In this ever evolving digital world, understand the significance of staying ahead. Through our blog, we invite you to explore the dynamic world of IT with us — decoding algorithms to unraveling the latest trends.',
    profileImg: '/home/profile.png', name: 'Sarah K. Williams', designation: 'Travel Blogger'
  },
  {
    roomImage: '/home/room3.png', quotes: '/home/SVG.png',
    title: 'Trusted Experience',
    description: 'In this ever evolving digital world, understand the significance of staying ahead. Through our blog, we invite you to explore the dynamic world of IT with us — decoding algorithms to unraveling the latest trends.',
    profileImg: '/home/profile.png', name: 'David R. Thompson', designation: 'Business Traveller'
  }
];

export const FALLBACK_ADVERTISEMENTS = [
  { id: '1', desktop_image: '/home/ad1-img.png', title: 'Summer Escape', description: 'Book early & save big', view_count: 0, _id: '1' },
  { id: '2', desktop_image: '/home/ad2-img.png', title: 'Luxury Stays', description: 'Premium experiences await', view_count: 0, _id: '2' },
  { id: '3', desktop_image: '/home/ad3-img.png', title: 'City Hotels', description: 'Best city-center deals', view_count: 0, _id: '3' }
];

export const FALLBACK_LOCATIONS = ['Dhaka', 'Noakhali', 'Cumilla'];

export const FALLBACK_STATS = { locations: 0, properties: 0, bookings: 0, ratings: 0 };

// ─── Normalizers ──────────────────────────────────────────────────────────────

function normalizeHotel(h: any): any {
  const stars = h.stars || 4;
  return {
    id: h._id || h.id,
    cardImg: h.cardImage || '/listingpage/hotelimg.jpg',
    profileimg: h.profileImage || '/listingpage/profileimg.jpg',
    stars,
    starArray: Array(stars),
    views: h.views || 0,
    reviewText: h.reviewText || 'Good',
    reviews: h.reviews || 0,
    rating: h.rating || 0,
    hotelType: h.type || 'Hotel',
    hotelTitle: h.title || 'Hotel',
    rooms: h.rooms || 1,
    bathrooms: h.bathrooms || 1,
    size: h.size || '—',
    price: h.pricePerNight || 0
  };
}

function normalizeCategory(c: any, idx: number): any {
  return {
    id: c._id || idx + 1,
    icon: c.icon || '/home/hotel-icon.png',
    cardtitle: c.name,
    categoryItem: c.count != null ? `${c.count} Items` : '—'
  };
}

function normalizeTestimonial(t: any): any {
  return {
    roomImage: t.roomImage || '/home/room1.png',
    quotes: t.quotesIcon || t.quotes || '/home/SVG.png',
    title: t.title || t.name || 'Our Guest',
    description: t.description || '',
    profileImg: t.profileImage || t.userProfile || t.profileImg || '/home/profile.png',
    name: t.name || t.userName || 'Guest',
    designation: t.designation || t.userDestination || 'Valued Guest',
    rating: t.rating || t.star || 4
  };
}

function normalizePartner(p: any, baseUrl: string): any {
  const raw = p.image || '';
  const image = raw.startsWith('http') ? raw : `${baseUrl}/${raw}`;
  return {
    _id: p._id,
    name: p.name || 'Partner',
    image
  };
}

function normalizeAdvertisement(a: any): any {
  return {
    _id: a._id || a.id,
    desktop_image: a.desktop_image || '/home/ad1-img.png',
    title: a.title || '',
    description: a.description || '',
    view_count: a.view_count || 0
  };
}

// ─── Service ──────────────────────────────────────────────────────────────────

@Injectable({ providedIn: 'root' })
export class HotelService {
  private base = `${environment.apiUrl}/api/hotel`;
  private baseV1 = `${environment.apiUrl}/api/v1`;

  constructor(private http: HttpClient) {}

  // --- Stats ---
  getDashboardStats(): Observable<{ locations: number; properties: number; bookings: number; ratings: number }> {
    return this.http.get<any>(`${this.base}/listings/stats`).pipe(
      map(res => (res?.success && res.data ? res.data : FALLBACK_STATS)),
      catchError(() => of(FALLBACK_STATS))
    );
  }

  // --- Locations ---
  getLocations(): Observable<string[]> {
    return this.http.get<any>(`${this.base}/locations`).pipe(
      map(res => {
        const data: string[] = res?.success && Array.isArray(res.data) ? res.data : [];
        return data.length ? data : FALLBACK_LOCATIONS;
      }),
      catchError(() => of(FALLBACK_LOCATIONS))
    );
  }

  // --- Categories ---
  getCategories(): Observable<any[]> {
    return this.http.get<any>(`${this.base}/categories`).pipe(
      map(res => {
        const data = res?.success && Array.isArray(res.data) ? res.data : [];
        return data.length ? data.map(normalizeCategory) : FALLBACK_CATEGORIES;
      }),
      catchError(() => of(FALLBACK_CATEGORIES))
    );
  }

  // --- Hotels ---
  getHotels(filters: Record<string, any> = {}): Observable<any[]> {
    let params = new HttpParams();
    Object.keys(filters).forEach(key => {
      if (filters[key] != null && filters[key] !== '') {
        params = params.append(key, filters[key]);
      }
    });
    return this.http.get<any>(`${this.baseV1}/hotels`, { params }).pipe(
      map(res => {
        const data = res?.success && Array.isArray(res.data) ? res.data : [];
        return data.map(normalizeHotel);
      }),
      catchError(() => of([]))
    );
  }

  getFeaturedHotels(): Observable<any[]> {
    return this.getHotels({ isFeatured: true });
  }

  getExclusiveOfferHotels(): Observable<any[]> {
    return this.getHotels({ isExclusiveOffer: true });
  }

  getPromotedHotels(): Observable<any[]> {
    return this.getHotels({ isPromoted: true });
  }

  getHotelById(id: string): Observable<any | null> {
    return this.http.get<any>(`${this.base}/listings/${id}`).pipe(
      map(res => (res?.success && res.data ? normalizeHotel(res.data) : null)),
      catchError(() => of(null))
    );
  }

  // --- Testimonials ---
  getTestimonials(): Observable<any[]> {
    return this.http.get<any>(`${this.baseV1}/meta/testimonials`).pipe(
      map(res => {
        const data = res?.success && Array.isArray(res.data) ? res.data : [];
        return data.map(normalizeTestimonial);
      }),
      catchError(() => of([]))
    );
  }

  // --- Partners ---
  getPartners(): Observable<any[]> {
    const base = environment.apiUrl;
    return this.http.get<any>(`${this.baseV1}/meta/partners`).pipe(
      map(res => {
        const data = res?.success && Array.isArray(res.data) ? res.data : [];
        return data.map((p: any) => normalizePartner(p, base));
      }),
      catchError(() => of([]))
    );
  }

  // --- Advertisements ---
  getAdvertisements(): Observable<any[]> {
    return this.http.get<any>(`${this.base}/advertisements`).pipe(
      map(res => {
        const data = res?.success && Array.isArray(res.data) ? res.data : [];
        return data.length ? data.map(normalizeAdvertisement) : FALLBACK_ADVERTISEMENTS;
      }),
      catchError(() => of(FALLBACK_ADVERTISEMENTS))
    );
  }

  registerAdClick(adId: string): Observable<any> {
    return this.http.put(`${this.base}/advertisements/${adId}/lead`, {}).pipe(
      catchError(() => of(null))
    );
  }

  // ─── V1 Booking Engine Integrations ───────────────────────────────────────────

  getHotelDetailsV1(hotelId: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/v1/hotels/${hotelId}`).pipe(
      map(res => res?.data || null),
      catchError(() => of(null))
    );
  }

  getRoomsForHotel(hotelId: string, queryParams: any = {}): Observable<any[]> {
    return this.http.get<any>(`${environment.apiUrl}/api/v1/hotels/${hotelId}/rooms`, { params: queryParams }).pipe(
      map(res => res?.success && res.data ? res.data : []),
      catchError(() => of([])) // fallback to empty array
    );
  }

  checkRoomAvailability(payload: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/v1/bookings/availability`, payload).pipe(
      catchError(() => of({ available: false }))
    );
  }

  createBooking(payload: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/v1/bookings`, payload);
  }

  getExtraServices(): Observable<any[]> {
    return this.http.get<any>(`${environment.apiUrl}/api/v1/meta/services`).pipe(
      map(res => res?.success && res.data ? res.data : []),
      catchError(() => of([]))
    );
  }

  getRoomCategories(): Observable<any[]> {
    return this.http.get<any>(`${environment.apiUrl}/api/v1/meta/room-categories`).pipe(
      map(res => res?.success && res.data ? res.data : []),
      catchError(() => of([]))
    );
  }
}
