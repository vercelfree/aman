// HomePage.jsx - Main App Component - Fully Responsive
import React from 'react'
import { useState } from 'react';
import PublicationsPage from './components/Publications';
import NewsPage from './components/News';
import CVPage from './components/CV';
import HomePage from './components/Home';
import Navigation from './components/Navigation';
import LeftSidebar from './components/LeftSidebar';
import Footer from './components/Footer';

function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'publications':
        return <PublicationsPage />;
      case 'news':
        return <NewsPage />;
      case 'cv':
        return <CVPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Sidebar - Mobile: full width, Desktop: 1/4 width */}
          <div className="lg:col-span-1 order-1">
            <div className="lg:sticky lg:top-24">
              {/* Mobile: Card layout, Desktop: Sidebar layout */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-4">
                <LeftSidebar />
              </div>
            </div>
          </div>
          
          {/* Main Content - Mobile: full width, Desktop: 3/4 width */}
          <div className="lg:col-span-3 order-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;