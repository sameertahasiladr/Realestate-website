import React from 'react';
import { X, MapPin, Bed, Bath, Square, Heart, Phone, Mail, Calendar } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={property.image} 
            alt={property.name}
            className="w-full h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
          <div className="absolute bottom-4 left-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-lg font-bold">
            ₹{property.price.toLocaleString()}
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{property.name}</h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.bedrooms && (
                    <div className="flex items-center">
                      <Bed className="h-5 w-5 mr-2 text-emerald-500" />
                      <div>
                        <div className="font-semibold">{property.bedrooms}</div>
                        <div className="text-sm text-gray-600">Bedrooms</div>
                      </div>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 mr-2 text-emerald-500" />
                      <div>
                        <div className="font-semibold">{property.bathrooms}</div>
                        <div className="text-sm text-gray-600">Bathrooms</div>
                      </div>
                    </div>
                  )}
                  {property.area && (
                    <div className="flex items-center">
                      <Square className="h-5 w-5 mr-2 text-emerald-500" />
                      <div>
                        <div className="font-semibold">{property.area}</div>
                        <div className="text-sm text-gray-600">Sq Ft</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-emerald-500" />
                    <div>
                      <div className="font-semibold">2024</div>
                      <div className="text-sm text-gray-600">Year Built</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{property.description}</p>
                <p className="text-gray-600 leading-relaxed">
                  This exceptional property offers modern living at its finest. With premium finishes throughout, 
                  spacious layouts, and prime location, this home represents an outstanding opportunity for 
                  discerning buyers. The property features high-end appliances, hardwood floors, and large 
                  windows that flood the space with natural light.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span>Air Conditioning</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span>Parking Space</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span>Swimming Pool</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span>Garden</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span>Security System</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span>Gym/Fitness Center</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-slate-800 text-white rounded-xl p-6 sticky top-4">
                <h3 className="text-xl font-semibold mb-6">Contact Agent</h3>
                
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                    alt="Agent" 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-emerald-400">Senior Real Estate Agent</div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-emerald-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-emerald-400" />
                    <span>sarah@realestate.com</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-all">
                    Schedule Viewing
                  </button>
                  <button className="w-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white py-3 rounded-lg font-semibold transition-all">
                    Request Info
                  </button>
                  <button className="w-full flex items-center justify-center border border-gray-300 text-gray-300 hover:border-red-400 hover:text-red-400 py-3 rounded-lg font-semibold transition-all">
                    <Heart className="h-5 w-5 mr-2" />
                    Save Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;