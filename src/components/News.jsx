// News.jsx Component
import { useState } from "react";
import newsData from "../data/news";

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Publication', 'Service', 'Conference', 'Collaboration'];

  const filteredNews = selectedCategory === 'All' 
    ? newsData.updates 
    : newsData.updates.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">News & Updates</h2>
      
      {/* Category Filter */}
      <div className="flex space-x-2 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Updates */}
      <div className="space-y-4">
        {filteredNews.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium text-gray-800">{item.date}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                item.category === 'Publication' ? 'bg-green-100 text-green-800' :
                item.category === 'Service' ? 'bg-blue-100 text-blue-800' :
                item.category === 'Conference' ? 'bg-purple-100 text-purple-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                {item.category}
              </span>
            </div>
            <p className={`text-gray-700 ${item.highlight ? 'font-medium' : ''}`}>
              {item.content} {item.highlight && <span className="text-red-500">🎉</span>}
            </p>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      {newsData.upcomingEvents.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {newsData.upcomingEvents.map((event) => (
              <div key={event.id} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-800">{event.event}</h4>
                    <p className="text-gray-600 text-sm">{event.location}</p>
                    <p className="text-blue-600 text-sm font-medium">Role: {event.role}</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    {event.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default NewsPage;