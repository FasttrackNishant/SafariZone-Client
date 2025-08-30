const dashboardData = {
  "user": {
    "name": "Nishant",
    "profilePicture": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "membershipTier": "Premium",
    "email": "nishant@example.com",
    "phone": "+91 9876543210",
    "joinedDate": "2023-05-15",
    "totalBookings": 12,
    "pointsEarned": 2450
  },
  
  "welcomeMessage": "Welcome back, Nishant!",
  
  "quickLinks": [
    { "label": "Edit Profile", "path": "/dashboard/profile/edit", "icon": "👤" },
    { "label": "Travel History", "path": "/dashboard/bookings/history", "icon": "📋" },
    { "label": "Wishlist", "path": "/dashboard/wishlist", "icon": "❤️" }
  ],

  "upcomingTrips": [
    {
      "bookingId": "BKG12345",
      "parkName": "Tadoba Andhari Tiger Reserve",
      "zoneName": "Core Zone", 
      "sessionName": "Morning Safari",
      "date": "2025-09-15",
      "timeSlot": "06:00 AM - 10:00 AM",
      "vehicleType": "Jeep",
      "seatsBooked": 3,
      "totalAmount": 2250,
      "qrCode": "/qrcodes/BKG12345.png",
      "ticketUrl": "/tickets/BKG12345.pdf",
      "status": "Confirmed",
      "reportingTime": "05:30 AM",
      "reportingLocation": "Tadoba Core Zone Gate"
    },
    {
      "bookingId": "BKG12346", 
      "parkName": "Pench National Park",
      "zoneName": "Buffer Zone",
      "sessionName": "Evening Safari",
      "date": "2025-10-05",
      "timeSlot": "03:00 PM - 07:00 PM",
      "vehicleType": "Canter",
      "seatsBooked": 2,
      "totalAmount": 1500,
      "qrCode": "/qrcodes/BKG12346.png", 
      "ticketUrl": "/tickets/BKG12346.pdf",
      "status": "Pending",
      "reportingTime": "02:30 PM",
      "reportingLocation": "Pench Buffer Zone Gate"
    }
  ],

  "bookingHistory": [
    {
      "bookingId": "BKG12340",
      "parkName": "Kanha National Park",
      "zoneName": "Core Zone",
      "sessionName": "Morning Safari",
      "date": "2025-07-20",
      "vehicleType": "Jeep",
      "seatsBooked": 4,
      "totalAmount": 3000,
      "status": "Completed",
      "rating": 5,
      "review": "Amazing experience! Saw 2 tigers."
    },
    {
      "bookingId": "BKG12341",
      "parkName": "Bandhavgarh National Park", 
      "zoneName": "Core Zone",
      "sessionName": "Evening Safari",
      "date": "2025-06-15",
      "vehicleType": "Jeep",
      "seatsBooked": 2,
      "totalAmount": 1800,
      "status": "Completed",
      "rating": 4,
      "review": "Good safari, saw leopard and deer."
    }
  ],

  "complaints": [
    {
      "complaintId": "CPL1001",
      "bookingId": "BKG12340",
      "date": "2025-07-21",
      "subject": "Late pickup service",
      "description": "The pickup vehicle was 15 minutes late which caused us to miss some safari time.",
      "status": "Resolved",
      "resolution": "Refunded ₹200 as compensation for the inconvenience.",
      "priority": "Medium"
    },
    {
      "complaintId": "CPL1002",
      "bookingId": "BKG12341", 
      "date": "2025-08-20",
      "subject": "Unhygienic vehicle condition",
      "description": "The safari jeep was not properly cleaned and had leftover food items.",
      "status": "Pending",
      "priority": "High"
    }
  ],

  "notifications": [
    {
      "id": "NTF1001",
      "type": "reminder",
      "title": "Upcoming Safari Reminder",
      "message": "Your Morning Safari at Tadoba is scheduled for tomorrow at 6:00 AM. Don't forget to carry valid ID proof!",
      "date": "2025-09-14",
      "read": false
    },
    {
      "id": "NTF1002",
      "type": "update",
      "title": "Park Closure Update",
      "message": "Tadoba National Park will be closed on September 20, 2025 for maintenance work.",
      "date": "2025-09-10",
      "read": false
    },
    {
      "id": "NTF1003",
      "type": "offer",
      "title": "Special Discount Available",
      "message": "Get 15% off on your next booking! Use code WILDLIFE15. Valid till September 30.",
      "date": "2025-09-05",
      "read": true
    }
  ],

  "support": {
    "liveChatAvailable": true,
    "emergencyContact": "+91 1234567890",
    "supportHours": "24/7 Available",
    "faqUrl": "/dashboard/support/faq",
    "helpCenterUrl": "/dashboard/support/help"
  },

  "stats": {
    "totalTrips": 12,
    "totalSpent": 24500,
    "favoriteDestination": "Tadoba",
    "memberSince": "May 2023",
    "loyaltyPoints": 2450
  }
};

export default dashboardData;
