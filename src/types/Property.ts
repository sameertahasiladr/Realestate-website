export interface Property {
  id: number;
  name: string;
  location: string;
  type: 'Apartment' | 'House' | 'Commercial';
  price: number;
  image: string;
  description: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  featured?: boolean;
}