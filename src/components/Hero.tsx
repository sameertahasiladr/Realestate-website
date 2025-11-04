import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { properties } from '../data/properties';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProperties = properties.filter(p => p.featured).concat(properties.slice(0, 3));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProperties.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length);
  };

  const currentProperty = featuredProperties[currentSlide];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {currentProperty?.name || "Penthouse Apartment with 5 Rooms in Pipera-Baneasa Forest Area"}
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              {currentProperty?.description || "Penthouse apartment for sale located on Iancu Nicolae Road. With this property you can enjoy the advantages such as proximity to Baneasa Forest and the benefits of a luxury residential area."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                View Details
              </button>
              <button className="border border-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all">
                See All Apartments
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
                <img 
                  src={currentProperty?.image || "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"}
                  alt={currentProperty?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute bottom-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">€ {currentProperty?.price?.toLocaleString() || "132,000"}</div>
                <div className="text-sm opacity-90">{currentProperty?.type || "Penthouse Apartment"}</div>
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {featuredProperties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ₹{
                index === currentSlide ? 'bg-emerald-500' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;