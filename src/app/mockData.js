// Mock data for SafariZone platform

export const safaris = [
  {
    id: 1,
    name: "Tadoba Tiger Safari",
    park: "Tadoba Andhari Tiger Reserve",
    location: "Chandrapur, Maharashtra",
    description: "Experience the thrill of spotting the majestic Bengal Tiger in their natural habitat. This safari offers the best chance to see tigers, leopards, and other wildlife.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop",
    duration: "3 hours",
    price: 2500,
    slots: [
      { time: "06:00 AM", available: true },
      { time: "09:00 AM", available: true },
      { time: "03:00 PM", available: false },
      { time: "06:00 PM", available: true }
    ],
    maxGuests: 6,
    difficulty: "Easy",
    bestTime: "October to June",
    highlights: ["Tiger Spotting", "Bird Watching", "Nature Photography", "Expert Guides"]
  },
  {
    id: 2,
    name: "Melghat Wilderness Safari",
    park: "Melghat Tiger Reserve",
    location: "Amravati, Maharashtra",
    description: "Explore the pristine wilderness of Melghat, home to diverse flora and fauna. Perfect for nature enthusiasts and wildlife photographers.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    duration: "4 hours",
    price: 3000,
    slots: [
      { time: "06:30 AM", available: true },
      { time: "10:00 AM", available: true },
      { time: "04:00 PM", available: true }
    ],
    maxGuests: 8,
    difficulty: "Moderate",
    bestTime: "November to May",
    highlights: ["Wildlife Diversity", "Scenic Landscapes", "Cultural Heritage", "Adventure"]
  },
  {
    id: 3,
    name: "Navegaon Bird Safari",
    park: "Navegaon National Park",
    location: "Gondia, Maharashtra",
    description: "A paradise for bird watchers with over 200 species of birds. Experience the serene beauty of this wetland ecosystem.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    duration: "2.5 hours",
    price: 1800,
    slots: [
      { time: "07:00 AM", available: true },
      { time: "09:30 AM", available: true },
      { time: "04:30 PM", available: true }
    ],
    maxGuests: 10,
    difficulty: "Easy",
    bestTime: "October to March",
    highlights: ["Bird Watching", "Wetland Ecosystem", "Peaceful Environment", "Family Friendly"]
  },
  {
    id: 4,
    name: "Gugamal Wildlife Safari",
    park: "Gugamal National Park",
    location: "Amravati, Maharashtra",
    description: "Discover the rich biodiversity of Gugamal, known for its unique ecosystem and rare species of plants and animals.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    duration: "3.5 hours",
    price: 2200,
    slots: [
      { time: "06:00 AM", available: true },
      { time: "08:30 AM", available: false },
      { time: "03:30 PM", available: true }
    ],
    maxGuests: 6,
    difficulty: "Moderate",
    bestTime: "December to April",
    highlights: ["Biodiversity", "Rare Species", "Scenic Beauty", "Educational"]
  }
];

export const users = {
  tourist: {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bookings: [1, 3],
    preferences: ["Wildlife Photography", "Bird Watching", "Nature Walks"]
  },
  employee: {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@safari-zone.com",
    phone: "+91 98765 43211",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    role: "Senior Safari Guide",
    department: "Wildlife Operations",
    assignedTasks: ["Morning Safari", "Guest Training", "Safety Protocols"]
  }
};

export const bookings = [
  {
    id: 1,
    safariId: 1,
    userId: 1,
    date: "2024-01-15",
    time: "06:00 AM",
    guests: 2,
    totalAmount: 5000,
    status: "confirmed",
    paymentStatus: "paid",
    createdAt: "2024-01-10T10:00:00Z"
  },
  {
    id: 2,
    safariId: 3,
    userId: 1,
    date: "2024-01-20",
    time: "07:00 AM",
    guests: 1,
    totalAmount: 1800,
    status: "pending",
    paymentStatus: "pending",
    createdAt: "2024-01-12T14:30:00Z"
  }
];

export const payments = [
  {
    id: 1,
    bookingId: 1,
    amount: 5000,
    method: "credit_card",
    status: "completed",
    transactionId: "TXN_001_2024",
    date: "2024-01-10T10:30:00Z"
  },
  {
    id: 2,
    bookingId: 2,
    amount: 1800,
    method: "pending",
    status: "pending",
    transactionId: null,
    date: null
  }
];

export const stats = {
  totalSafaris: 156,
  totalTourists: 1247,
  totalRevenue: 2845000,
  parksCovered: 8,
  guidesEmployed: 23,
  satisfactionRate: 98.5
};

export const testimonials = [
  {
    id: 1,
    name: "Amit Kumar",
    role: "Wildlife Photographer",
    content: "The Tadoba safari was absolutely incredible! Our guide was knowledgeable and we spotted 3 tigers. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sneha Desai",
    role: "Nature Enthusiast",
    content: "Melghat safari exceeded all expectations. The biodiversity and natural beauty was breathtaking. Will definitely return!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Rajesh Verma",
    role: "Family Traveler",
    content: "Perfect family experience at Navegaon. Kids loved the bird watching and the guides were very patient and informative.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  }
];

export const parks = [
  {
    id: 1,
    name: "Tadoba Andhari Tiger Reserve",
    location: "Chandrapur, Maharashtra",
    area: "1727 sq km",
    established: 1955,
    description: "Maharashtra's oldest and largest national park, famous for its tiger population and diverse wildlife.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Melghat Tiger Reserve",
    location: "Amravati, Maharashtra",
    area: "2768 sq km",
    established: 1974,
    description: "A pristine wilderness area known for its rich biodiversity and scenic landscapes.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Navegaon National Park",
    location: "Gondia, Maharashtra",
    area: "133.88 sq km",
    established: 1975,
    description: "A bird watcher's paradise with diverse wetland ecosystems and migratory birds.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
  }
];
