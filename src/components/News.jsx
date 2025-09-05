// News.jsx Component - Simplified, Fully Responsive with Serial Numbers
import newsData from "../data/news";

const NewsPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">News & Updates</h2>

      {/* News List with Serial Numbers */}
      <div className="space-y-4">
        {newsData.updates.map((item, index) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
              <span className="text-sm sm:text-base font-semibold text-gray-800">
                {index + 1}. {item.date}
              </span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
