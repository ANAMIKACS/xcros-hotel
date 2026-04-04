# Frontend Integration Guide: Hotel & Room API v1

## 1. Overarching Concept
The backend API has been completely restructured from a "Flat Listing" architecture to a relational **Hotel ➔ Rooms** architecture. Consequently, the frontend booking components must make sequential requests to correctly display the parent hotel and its available room variations.

## 2. API Base Structure
All new endpoints are prefixed under `/api/v1`.
All successful responses return a normalized JSON object structure:
```json
{
  "success": true,
  "data": { ... } // Or an array [...]
}
```

## 3. Recommended Frontend Flow
In your Angular/TypeScript component (e.g., `room-booking-listing-details.ts`), you should adopt the following order of operations for the UI.

### Step 3.1: Fetch Hotel Details (on Load)
**Endpoint**: `GET /api/v1/hotels/:hotelId`
Loads the main hotel branding, location, rating, and descriptions.

**Snippet Idea**:
```typescript
ngOnInit() {
  const hotelId = this.route.snapshot.paramMap.get('id');
  this.http.get(`/api/v1/hotels/${hotelId}`).subscribe((res: any) => {
     this.hotelDetails = res.data;
     // Once the hotel is loaded, load its rooms:
     this.fetchRoomsForHotel();
  });
}
```

### Step 3.2: Fetch Available Rooms for the Selected Hotel
**Endpoint**: `GET /api/v1/hotels/:hotelId/rooms`
*(Optional Query Params: `?guests=2&checkIn=DATE&checkOut=DATE`)*
Fetches room categories that belong specifically under the current Hotel.

**Snippet Idea**:
Rather than hardcoding standard PrimeNG room dropdowns, dynamically map the response from this API to the UI so users pick from actual inventory available at *this exact hotel*.
```typescript
fetchRoomsForHotel() {
  this.http.get(`/api/v1/hotels/${this.hotelId}/rooms`).subscribe((res: any) => {
     this.availableRooms = res.data;
     // Map this.availableRooms to your PrimeNG dropdown items
  });
}
```

### Step 3.3: Availability Validation (Before Submit)
**Endpoint**: `POST /api/v1/bookings/availability`
Verifies the selected room inventory is available right when the user clicks 'Book Now'.

**Expected Payload**:
```json
{
  "roomId": "SELECTED_ROOM_ID",
  "hotelId": "CURRENT_HOTEL_ID",
  "checkIn": "2024-12-01",
  "checkOut": "2024-12-05"
}
```
If `response.available === true`, you can safely transition to the booking submission or payment gateway.

### Step 3.4: Finalize Booking
**Endpoint**: `POST /api/v1/bookings`

**Expected Payload**:
```json
{
  "hotelId": "CURRENT_HOTEL_ID",
  "roomId": "SELECTED_ROOM_ID",
  "userId": "CURRENT_USER_ID",
  "checkInDate": "2024-12-01",
  "checkOutDate": "2024-12-05",
  "guests": { "adults": 2, "children": 0 },
  "extraServices": ["Airport Pickup"],
  "totalCost": 420.00
}
```

---

## 4. Useful Metadata APIs for Dropdowns
Populate your frontend form selectors dynamically instead of hardcoding values:
- **`GET /api/v1/meta/services`**: Returns extra services like `["Airport Pickup", "Spa", "Breakfast", "Gym", "Late Checkout"]`
- **`GET /api/v1/meta/room-categories`**: Returns core room categories like `["Budget", "Mid-range", "Luxury", "Family-friendly", "Business"]`

## 5. UI Calculation Warning
Because the Total Price calculation depends on the length of the stay and the Room category selected, ensure that:

```typescript
Total Cost = (Duration_In_Nights * Selected_Room.pricing.basePricePerNight) + Price_of_ExtraServices;
```

This value should be accurately calculated interactively on the frontend prior to submission, and transmitted correctly within the `POST /api/v1/bookings` payload.
