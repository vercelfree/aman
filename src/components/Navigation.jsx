// Navigation Component - Fully Responsive
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import personalInfo from "../data/personalInfo";

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'publications', label: 'Publications' },
    { id: 'news', label: 'News' },
    { id: 'cv', label: 'CV' }
  ];

  const handleMenuClick = (itemId) => {
    setCurrentPage(itemId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate">
            {personalInfo.name}
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`relative group text-sm font-medium py-2 transition-colors duration-200
                  ${currentPage === item.id ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}
                `}
              >
                {item.label}
                {/* Animated underline */}
                <span
                  className={`absolute left-1/2 bottom-0 h-0.5 transition-all duration-300 transform -translate-x-1/2
                    ${currentPage === item.id 
                      ? 'bg-blue-600 w-full' 
                      : 'bg-red-500 w-0 group-hover:w-full'}
                  `}
                />
              </button>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;