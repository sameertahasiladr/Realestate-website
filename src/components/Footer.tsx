import React from 'react';
import { Home, MapPin, Building, Key, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-emerald-400 to-green-500 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">RealEstate</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Exceptional sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum incididunt.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia consequuntur magni dolores.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><Building className="h-4 w-4 mr-2" />Villa</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><Building className="h-4 w-4 mr-2" />Residential</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><Key className="h-4 w-4 mr-2" />Apartment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><Building className="h-4 w-4 mr-2" />Condominium</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><Building className="h-4 w-4 mr-2" />Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><Building className="h-4 w-4 mr-2" />Office</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Locations</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><MapPin className="h-4 w-4 mr-2" />Bucharest</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><MapPin className="h-4 w-4 mr-2" />Constanta</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><MapPin className="h-4 w-4 mr-2" />Brasov</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><MapPin className="h-4 w-4 mr-2" />Cluj-Napoca</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"><MapPin className="h-4 w-4 mr-2" />Craiova</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">From the Blog</h3>
            <div className="space-y-4">
              <div className="flex space-x-3">
                <img src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop" alt="Blog post" className="w-16 h-12 rounded object-cover" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Making First Impressions Count with Comparable Homes</p>
                  <p className="text-xs text-emerald-400">March 09, 2020</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop" alt="Blog post" className="w-16 h-12 rounded object-cover" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Dubai City Areas Where It's Cheapest to Rent</p>
                  <p className="text-xs text-emerald-400">February 24, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              Copyright © 2024 <span className="text-emerald-400">RealEstate</span> Inc. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;