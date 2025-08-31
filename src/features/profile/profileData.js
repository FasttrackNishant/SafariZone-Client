export const profileData = {
  "ProfileId": 1,
  "UserId": 1,
  "FirstName": "Tourist",
  "LastName": "User",
  "PhoneNumber": "9998887777",
  "DateOfBirth": "1995-01-15",
  "GenderId": 1,
  "Street": "123 Safari Lane",
  "City": "Pune",
  "State": "Maharashtra",
  "CountryId": 1,
  "ZipCode": "411001",
  "ProfilePictureUrl": null,
  "IsProfileComplete": true,
  "CreatedAt": "2023-06-01T09:00:00Z",
  "UpdatedAt": "2025-08-31T12:00:00Z",
  "Email": "tourist@safarizone.com",
  "MembershipTier": "Premium",
  "TotalBookings": 12,
  "LoyaltyPoints": 2450
};

export const countries = {
  1: { "CountryName": "India", "CountryCode": "+91" },
  2: { "CountryName": "United States", "CountryCode": "+1" },
  3: { "CountryName": "United Kingdom", "CountryCode": "+44" },
  4: { "CountryName": "Australia", "CountryCode": "+61" },
  5: { "CountryName": "Canada", "CountryCode": "+1" }
};

export const genderTypes = {
  1: "Male",
  2: "Female", 
  3: "Other",
  4: "Prefer not to say"
};

export const identityTypes = {
  1: "Aadhaar Card",
  2: "Passport",
  3: "Driving License",
  4: "PAN Card",
  5: "Voter ID"
};

export const identityProofs = [
  {
    "IdentityProofId": 101,
    "UserId": 1,
    "IdentityTypeId": 1,
    "IdentityNumber": "1234-5678-9012",
    "IdentityDocumentUrl": "https://example.com/documents/aadhaar1234.jpg",
    "IsVerified": true,
    "ExpiryDate": null,
    "CreatedAt": "2023-01-15T10:30:00Z",
    "UpdatedAt": "2023-01-15T10:30:00Z"
  },
  {
    "IdentityProofId": 102,
    "UserId": 1,
    "IdentityTypeId": 2,
    "IdentityNumber": "M1234567",
    "IdentityDocumentUrl": "https://example.com/documents/passportM1234567.jpg",
    "IsVerified": true,
    "ExpiryDate": "2030-05-15",
    "CreatedAt": "2023-01-15T10:40:00Z",
    "UpdatedAt": "2023-01-15T10:40:00Z"
  }
];

export const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];
