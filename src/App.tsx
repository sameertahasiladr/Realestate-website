import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import PropertyGrid from './components/PropertyGrid';
import Footer from './components/Footer';
import SubmitPropertyModal from './components/SubmitPropertyModal';
import { properties } from './data/properties';
import { Property } from './types/Property';

function App() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const handleFilter = (filtered: Property[]) => {
    setFilteredProperties(filtered);
  };

  const handleSubmitProperty = () => {
    setIsSubmitModalOpen(true);
  };

  const handleCloseSubmitModal = () => {
    setIsSubmitModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onSubmitProperty={handleSubmitProperty} />
      <Hero />
      <SearchFilters onFilter={handleFilter} properties={properties} />
      <PropertyGrid properties={filteredProperties} />
      <Footer />
      
      <SubmitPropertyModal 
        isOpen={isSubmitModalOpen}
        onClose={handleCloseSubmitModal}
      />
    </div>
  );
}

export default App;