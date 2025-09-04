import React from 'react'
import New from './new'
import { useState } from 'react';
import PublicationsPage from './components/Publications';
import NewsPage from './components/News';
import CVPage from './components/CV';
import HomePage from './components/Home';
import Navigation from './components/Navigation';
import LeftSidebar from './components/LeftSidebar';

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
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Always visible */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <LeftSidebar />
            </div>
          </div>
          
          {/* Main Content - Changes based on navigation */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;