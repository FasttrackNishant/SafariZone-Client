const safariBookingData = {
  "safariBooking": {
    "parkId": "tadoba",
    "parkName": "Tadoba Andhari Tiger Reserve",
    "zoneId": "core",
    "zoneName": "Core Zone",
    "sessionId": "morning",
    "sessionName": "Morning Safari",
    "vehicleType": "jeep",
    "vehicleDetails": {
      "type": "Jeep",
      "capacity": 6,
      "icon": "🚙",
      "description": "Open-top safari jeep for optimal wildlife viewing"
    },
    "safariDetails": {
      "date": "2025-09-15",
      "startTime": "06:00 AM",
      "endTime": "10:00 AM",
      "duration": "4 hours",
      "reportingTime": "05:30 AM",
      "reportingPlace": "Tadoba Core Zone Gate"
    },
    "pricing": {
      "pricePerSeat": 750,
      "pricePerVehicle": 4500,
      "forestEntryFee": 150,
      "guideFee": 300,
      "currency": "INR"
    },
    "availability": {
      "totalSlots": 20,
      "availableSlots": 8,
      "bookedSlots": 12
    },
    "passengerLimits": {
      "maxPassengersPerVehicle": 6,
      "minPassengersRequired": 1,
      "childAgeLimit": 12,
      "infantAgeLimit": 3
    },
    "safariRules": [
      "All passengers must carry original photo ID proof (Aadhar, Passport, Driving License)",
      "Children below 5 years are not allowed in core zones",
      "Smoking, alcohol, and plastic items are strictly prohibited",
      "Follow naturalist and driver instructions at all times",
      "Maintain complete silence during wildlife sightings",
      "Do not feed or disturb wildlife",
      "Report to the gate 30 minutes before safari time",
      "Late arrivals will forfeit their booking with no refund"
    ],
    "allowedItems": [
      "Camera and binoculars",
      "Water bottles (non-plastic preferred)",
      "Light snacks in reusable containers",
      "Sunscreen and hats",
      "Medicines (if required)"
    ],
    "prohibitedItems": [
      "Plastic bags and bottles",
      "Alcoholic beverages",
      "Tobacco products",
      "Loud music devices",
      "Pets",
      "Outside food in plastic packaging"
    ],
    "bookingTerms": [
      "Booking confirmation subject to availability",
      "Full payment required at time of booking",
      "Cancellation allowed up to 24 hours before safari",
      "50% refund for cancellations made 24-48 hours prior",
      "No refund for cancellations within 24 hours",
      "Weather-dependent cancellations eligible for full refund",
      "ID verification mandatory at entry gate"
    ]
  },
  "passengers": [
    {
      "id": 1,
      "type": "primary",
      "title": "Mr",
      "firstName": "",
      "lastName": "",
      "age": null,
      "gender": "",
      "idProofType": "",
      "idProofNumber": "",
      "nationality": "Indian",
      "contactNumber": "",
      "email": "",
      "emergencyContact": "",
      "isRequired": true
    }
  ],
  "idProofTypes": [
    { "value": "aadhar", "label": "Aadhar Card" },
    { "value": "passport", "label": "Passport" },
    { "value": "driving_license", "label": "Driving License" },
    { "value": "pan_card", "label": "PAN Card" },
    { "value": "voter_id", "label": "Voter ID" }
  ],
  "genderOptions": [
    { "value": "male", "label": "Male" },
    { "value": "female", "label": "Female" },
    { "value": "other", "label": "Other" }
  ],
  "nationalityOptions": [
    { "value": "indian", "label": "Indian" },
    { "value": "foreign", "label": "Foreign National" }
  ]
};

export default safariBookingData;
