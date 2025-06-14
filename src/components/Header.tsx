import React, { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

interface HeaderProps {
  onSubmitProperty: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSubmitProperty }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-emerald-400 to-green-500 p-2 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">RealEstate</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#properties" className="hover:text-emerald-400 transition-colors">For Sale</a>
            <a href="#properties" className="hover:text-emerald-400 transition-colors">For Rent</a>
            <a href="#investments" className="hover:text-emerald-400 transition-colors">Investments</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Company</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
            <button 
              onClick={onSubmitProperty}
              className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg transition-colors"
            >
              Submit Your Property
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-emerald-400 transition-colors">Home</a>
              <a href="#properties" className="hover:text-emerald-400 transition-colors">For Sale</a>
              <a href="#properties" className="hover:text-emerald-400 transition-colors">For Rent</a>
                <a href="#investments" className="hover:text-emerald-400 transition-colors">Investments</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Company</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
              <button 
                onClick={onSubmitProperty}
                className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg transition-colors w-full"
              >
                Submit Your Property
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;