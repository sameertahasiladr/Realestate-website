import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import PropertyModal from './PropertyModal';
import { Property } from '../types/Property';

interface PropertyGridProps {
  properties: Property[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const propertiesPerPage = 6;
  
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
  
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <section id="properties" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We are Offering the Best Real Estate Deals
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Look at our latest listed properties and check out the facilities. We have already sold more than 3,000 homes and we are 
            still going at very good pace. We would love you to look into these properties and we hope that you will find something 
            suitable to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProperties.map(property => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center">
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ₹{
                    currentPage === i + 1
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default PropertyGrid;