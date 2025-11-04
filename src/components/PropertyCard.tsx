import React from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all">
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {property.type}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
          {property.name}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>
        
        {(property.bedrooms || property.bathrooms || property.area) && (
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b">
            {property.bedrooms && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{property.bedrooms} Bed</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span>{property.bathrooms} Bath</span>
              </div>
            )}
            {property.area && (
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1" />
                <span>{property.area} sqft</span>
              </div>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-600">
            ₹{property.price.toLocaleString()}
          </div>
          <button 
            onClick={() => onViewDetails(property)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;