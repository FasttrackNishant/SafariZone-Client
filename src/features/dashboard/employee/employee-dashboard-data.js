const employeeDashboardData = {
  "employee": {
    "id": "EMP001",
    "name": "Rajesh Kumar",
    "role": "Park Manager",
    "department": "Operations",
    "shift": "6:00 AM - 6:00 PM",
    "profilePicture": "https://randomuser.me/api/portraits/men/32.jpg",
    "permissions": ["booking_management", "vehicle_management", "staff_management", "analytics"]
  },

  "todaysSafaris": [
    {
      "bookingId": "BK2025001",
      "touristName": "John Smith",
      "contactNumber": "+91 9876543210",
      "zone": "Core Zone",
      "session": "Morning Safari",
      "time": "06:00 AM - 10:00 AM",
      "vehicleId": "TDB-J001",
      "driverId": "DRV001",
      "guideId": "GUD001",
      "seatsBooked": 4,
      "totalPassengers": 4,
      "status": "Confirmed",
      "checkInStatus": "Pending",
      "specialRequests": "Wheelchair accessible",
      "emergencyContact": "+91 9876543211"
    },
    {
      "bookingId": "BK2025002",
      "touristName": "Sarah Johnson",
      "contactNumber": "+91 9876543220",
      "zone": "Buffer Zone",
      "session": "Evening Safari",
      "time": "03:00 PM - 07:00 PM",
      "vehicleId": "TDB-J002",
      "driverId": "DRV002",
      "guideId": "GUD002",
      "seatsBooked": 2,
      "totalPassengers": 2,
      "status": "Checked In",
      "checkInStatus": "Completed",
      "checkInTime": "05:30 AM",
      "specialRequests": null
    }
  ],

  "vehicles": [
    {
      "id": "TDB-J001",
      "type": "Jeep",
      "registrationNumber": "MH-31-AB-1234",
      "capacity": 6,
      "status": "Available",
      "currentLocation": "Main Gate",
      "driverId": "DRV001",
      "lastMaintenance": "2025-08-15",
      "nextMaintenance": "2025-10-15",
      "fuelLevel": 85,
      "kmsDriven": 12450
    },
    {
      "id": "TDB-J002",
      "type": "Jeep",
      "registrationNumber": "MH-31-CD-5678",
      "capacity": 6,
      "status": "In Maintenance",
      "currentLocation": "Service Center",
      "driverId": null,
      "lastMaintenance": "2025-08-30",
      "nextMaintenance": "2025-10-30",
      "fuelLevel": 0,
      "kmsDriven": 8750,
      "maintenanceIssue": "Engine repair required"
    },
    {
      "id": "TDB-C001",
      "type": "Canter",
      "registrationNumber": "MH-31-EF-9012",
      "capacity": 20,
      "status": "Available",
      "currentLocation": "Zone B Gate",
      "driverId": "DRV003",
      "lastMaintenance": "2025-07-20",
      "nextMaintenance": "2025-09-20",
      "fuelLevel": 60,
      "kmsDriven": 15200
    }
  ],

  "staff": [
    {
      "id": "DRV001",
      "name": "Ramesh Patil",
      "role": "Driver",
      "contactNumber": "+91 9876501001",
      "vehicleAssigned": "TDB-J001",
      "shiftTime": "06:00 AM - 02:00 PM",
      "status": "On Duty",
      "experience": "8 years",
      "licenseValid": true,
      "todaysSafaris": 2
    },
    {
      "id": "DRV002",
      "name": "Suresh Kale",
      "role": "Driver",
      "contactNumber": "+91 9876501002",
      "vehicleAssigned": "TDB-J002",
      "shiftTime": "02:00 PM - 10:00 PM",
      "status": "On Leave",
      "experience": "5 years",
      "licenseValid": true,
      "leaveReason": "Medical leave"
    },
    {
      "id": "GUD001",
      "name": "Prakash Jadhav",
      "role": "Guide",
      "contactNumber": "+91 9876501101",
      "languages": ["English", "Hindi", "Marathi"],
      "specialization": "Wildlife Photography",
      "shiftTime": "06:00 AM - 02:00 PM",
      "status": "On Duty",
      "experience": "12 years",
      "rating": 4.8,
      "todaysSafaris": 3
    },
    {
      "id": "GUD002",
      "name": "Sunita Desai",
      "role": "Guide",
      "contactNumber": "+91 9876501102",
      "languages": ["English", "Hindi"],
      "specialization": "Bird Watching",
      "shiftTime": "02:00 PM - 10:00 PM",
      "status": "On Duty",
      "experience": "6 years",
      "rating": 4.6,
      "todaysSafaris": 2
    }
  ],

  "parkOperations": {
    "currentOccupancy": {
      "coreZone": { "current": 45, "maximum": 60 },
      "bufferZone": { "current": 28, "maximum": 40 }
    },
    "weatherConditions": {
      "temperature": "28°C",
      "humidity": "65%",
      "windSpeed": "12 km/h",
      "visibility": "Good",
      "rainForecast": "No rain expected"
    },
    "emergencyAlerts": [
      {
        "id": "ALERT001",
        "type": "Animal Sighting",
        "priority": "Medium",
        "location": "Core Zone - Route 3",
        "description": "Tiger with cubs spotted near water hole",
        "reportedBy": "GUD001",
        "timestamp": "2025-08-31T08:30:00Z",
        "status": "Active",
        "action": "Maintain safe distance, inform all vehicles"
      },
      {
        "id": "ALERT002",
        "type": "Vehicle Breakdown",
        "priority": "High",
        "location": "Buffer Zone - Route 1",
        "description": "Jeep TDB-J003 engine overheating",
        "reportedBy": "DRV004",
        "timestamp": "2025-08-31T07:15:00Z",
        "status": "Resolved",
        "action": "Rescue vehicle dispatched, tourists transferred"
      }
    ]
  },

  "analytics": {
    "today": {
      "totalBookings": 45,
      "checkedIn": 38,
      "revenue": 156750,
      "occupancyRate": 78,
      "averageRating": 4.3
    },
    "thisWeek": {
      "totalBookings": 312,
      "revenue": 1087250,
      "occupancyRate": 82,
      "cancellationRate": 8
    },
    "vehicleUtilization": [
      { "vehicle": "TDB-J001", "utilization": 95 },
      { "vehicle": "TDB-J002", "utilization": 0 },
      { "vehicle": "TDB-C001", "utilization": 78 }
    ]
  },

  "communication": {
    "recentMessages": [
      {
        "id": "MSG001",
        "from": "GUD001",
        "to": "Control Room",
        "message": "Tiger sighting at coordinates 20.1234, 79.5678. All clear, maintaining distance.",
        "timestamp": "2025-08-31T08:30:00Z",
        "priority": "Normal",
        "read": true
      },
      {
        "id": "MSG002",
        "from": "DRV002",
        "to": "Supervisor",
        "message": "Vehicle TDB-J002 needs immediate maintenance check.",
        "timestamp": "2025-08-31T07:45:00Z",
        "priority": "High",
        "read": false
      }
    ],
    "broadcasts": [
      {
        "id": "BC001",
        "title": "Weather Update",
        "message": "Heavy rainfall expected tomorrow afternoon. All evening safaris may be cancelled.",
        "priority": "High",
        "timestamp": "2025-08-31T06:00:00Z",
        "validUntil": "2025-09-01T18:00:00Z"
      }
    ]
  }
};

export default employeeDashboardData;
