// Publications.jsx Component - Fully Responsive
import { useState } from "react";
import publicationsData from "../data/publications";

const PublicationsPage = () => {
  const [expandedBibtex, setExpandedBibtex] = useState(null);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Publications</h2>
        <div className="bg-blue-50 rounded-lg p-3 w-full sm:w-auto">
          <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="text-center">
              <div className="font-bold text-blue-600 text-sm sm:text-base">{publicationsData.stats.totalPapers}</div>
              <div className="text-gray-600">Total Papers</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-blue-600 text-sm sm:text-base">{publicationsData.stats.citations}</div>
              <div className="text-gray-600">Citations</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4 sm:space-y-6">
        {publicationsData.publications.map((pub, index) => (
          <div key={pub.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2 sm:gap-0">
              <h3 className="font-semibold text-gray-800 text-base sm:text-lg leading-tight pr-0 sm:pr-4 flex-1">{pub.title}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded whitespace-nowrap">{pub.year}</span>
            </div>
            <p className="text-blue-600 font-medium text-xs sm:text-sm mb-2">{pub.venue}</p>
            <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">{pub.authors}</p>
            
            {pub.abstract && (
              <div className="bg-gray-50 rounded p-3 mb-4">
                <h4 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Abstract:</h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{pub.abstract}</p>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{pub.type}</span>
              <div className="flex flex-wrap gap-2 sm:space-x-2">
                <a href={pub.paperUrl} className="text-blue-600 text-xs sm:text-sm hover:underline">
                  Paper
                </a>
                <a href={pub.codeUrl} className="text-blue-600 text-xs sm:text-sm hover:underline">
                  Code
                </a>
                <button 
                  onClick={() => setExpandedBibtex(expandedBibtex === pub.id ? null : pub.id)}
                  className="text-blue-600 text-xs sm:text-sm hover:underline"
                >
                  BibTeX
                </button>
              </div>
            </div>
            
            {expandedBibtex === pub.id && (
              <div className="mt-4 bg-gray-900 text-green-400 p-3 rounded text-xs font-mono overflow-x-auto">
                <pre className="whitespace-pre-wrap break-words">{pub.bibtex}</pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsPage;