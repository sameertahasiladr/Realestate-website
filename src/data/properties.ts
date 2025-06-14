import { Property } from '../types/Property';

export const properties: Property[] = [
  {
    id: 1,
    name: "Luxury Downtown Apartment",
    location: "123 Main Street",
    type: "Apartment",
    price: 250000,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description: "Stunning downtown apartment with modern amenities and city views",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    featured: true
  },
  {
    id: 2,
    name: "Suburban Family Home",
    location: "456 Oak Avenue",
    type: "House",
    price: 450000,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description: "Spacious family home in quiet suburban neighborhood",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    featured: false
  },
  {
    id: 3,
    name: "Modern Office Space",
    location: "789 Business Park",
    type: "Commercial",
    price: 750000,
    image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description: "Contemporary office space in prime business location",
    area: 3000,
    featured: false
  },
  {
    id: 4,
    name: "Casa Bliss - Pilerne",
    location: "Goa",
    type: "House",
    price: 300000,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description: "Beautiful villa with traditional architecture and modern comforts",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    featured: false
  },
  {
    id: 5,
    name: "Coconut Grove - Candolim",
    location: "Goa",
    type: "House",
    price: 350000,
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description: "Tropical paradise with coconut groves and beach access",
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    featured: false
  },
  {
    id: 6,
    name: "Casa Marina - Mirador",
    location: "Dubai",
    type: "Apartment",
    price: 800000,
    image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description: "Luxury apartment with marina views and premium finishes",
    bedrooms: 3,
    bathrooms: 3,
    area: 1500,
    featured: false
  }
];