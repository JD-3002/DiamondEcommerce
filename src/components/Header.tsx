import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Home, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onCategoryClick: (category: string) => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onCategoryClick, onHomeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  const categories = [
    { id: 'rings', name: 'Rings' },
    { id: 'bracelets', name: 'Bracelets' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
  ];

  const handleCategoryClick = (categoryId: string) => {
    onCategoryClick(categoryId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Home Icon */}
          <div className="flex items-center">
            <button 
              onClick={onHomeClick}
              className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors"
            >
              <Home className="w-6 h-6" />
            </button>
          </div>

          {/* Brand Name */}
          <div className="text-center">
            <button 
              onClick={onHomeClick}
              className="text-2xl md:text-3xl font-light tracking-wider text-gray-700 uppercase hover:text-gray-900 transition-colors"
            >
              Diamond Atelier
            </button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button 
              onClick={onCartClick}
              className="text-gray-600 hover:text-gray-800 cursor-pointer transition-colors relative"
            >
              <ShoppingBag className="w-6 h-6" />
              {state.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                  {state.totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:flex items-center justify-center mt-8">
          <div className="flex items-center space-x-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="text-gray-600 hover:text-gray-800 uppercase tracking-wide text-sm font-medium transition-colors"
              >
                {category.name}
              </button>
            ))}
            
            <button
              onClick={() => handleCategoryClick('custom')}
              className="text-gray-600 hover:text-gray-800 uppercase tracking-wide text-sm font-medium transition-colors"
            >
              Custom
            </button>
            
            {/* Search Bar */}
            <div className="relative">
              <div className="flex items-center bg-gray-600 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-white mr-2" />
                <input 
                  type="text" 
                  placeholder="SEARCH" 
                  className="bg-transparent text-white placeholder-white text-xs uppercase tracking-wide outline-none w-20"
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 mt-4 pt-4">
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-800 uppercase tracking-wide text-sm font-medium transition-colors"
                >
                  {category.name}
                </button>
              ))}
              
              <button
                onClick={() => handleCategoryClick('custom')}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-800 uppercase tracking-wide text-sm font-medium transition-colors"
              >
                Custom
              </button>
              
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="flex items-center bg-gray-600 rounded-full px-4 py-2">
                  <Search className="w-4 h-4 text-white mr-2" />
                  <input 
                    type="text" 
                    placeholder="SEARCH" 
                    className="bg-transparent text-white placeholder-white text-xs uppercase tracking-wide outline-none flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;