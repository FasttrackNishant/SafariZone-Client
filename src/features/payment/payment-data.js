const paymentData = {
  "paymentPage": {
    "title": "Confirm & Pay",
    "subtitle": "Complete your safari booking payment",
    "breadcrumb": ["Safari Booking", "Passenger Details", "Payment"],
    "securityBadges": [
      {
        "icon": "🔐",
        "text": "SSL Secured",
        "description": "Your data is encrypted"
      },
      {
        "icon": "✅",
        "text": "Trusted Gateway",
        "description": "Powered by Razorpay"
      },
      {
        "icon": "🛡️",
        "text": "Safe Payment",
        "description": "Bank-grade security"
      }
    ]
  },
  
  "paymentMethods": [
    {
      "id": "cards",
      "name": "Credit/Debit Cards",
      "icon": "💳",
      "description": "Visa, Mastercard, RuPay",
      "enabled": true
    },
    {
      "id": "upi",
      "name": "UPI",
      "icon": "📱",
      "description": "GPay, PhonePe, Paytm",
      "enabled": true
    },
    {
      "id": "netbanking",
      "name": "Net Banking",
      "icon": "🏦",
      "description": "All major banks",
      "enabled": true
    },
    {
      "id": "wallet",
      "name": "Wallets",
      "icon": "👛",
      "description": "Paytm, Amazon Pay, etc",
      "enabled": true
    }
  ],

  "offers": [
    {
      "id": "first-booking",
      "title": "First Booking Offer",
      "description": "Get 10% off on your first safari booking",
      "discount": 10,
      "code": "FIRST10",
      "minAmount": 1000,
      "maxDiscount": 500
    },
    {
      "id": "weekend-special",
      "title": "Weekend Special",
      "description": "Extra 5% off on weekend bookings",
      "discount": 5,
      "code": "WEEKEND5",
      "minAmount": 2000,
      "maxDiscount": 300
    }
  ],

  "terms": [
    "By proceeding with payment, you agree to our Terms & Conditions",
    "Cancellation charges apply as per our refund policy",
    "Safari timings are subject to forest department regulations",
    "ID verification is mandatory at the safari gate"
  ]
};

export default paymentData;
