// CV.jsx Component - Fully Responsive
import { useState } from "react";
import { Briefcase } from 'lucide-react';
import experienceData from "../data/experience";
import homeData from "../data/home";
import personalInfo from "../data/personalInfo";
import publicationsData from "../data/publications";

const CVPage = () => {
  const [activeSection, setActiveSection] = useState('experience');

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Curriculum Vitae</h2>
        <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm sm:text-base">
          Download PDF
        </button>
      </div>

      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2 sm:space-x-4 sm:gap-0 border-b border-gray-200 overflow-x-auto">
        {['experience', 'skills', 'education'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`pb-2 px-2 sm:px-1 text-xs sm:text-sm font-medium capitalize transition-colors duration-200 whitespace-nowrap ${
              activeSection === section
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <div className="space-y-4 sm:space-y-6">
          {experienceData.experiences.map((exp) => (
            <div key={exp.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2 sm:gap-0">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-base sm:text-lg">{exp.title}</h3>
                  <p className="text-blue-600 font-medium text-sm sm:text-base">{exp.organization}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{exp.location} • {exp.type}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-3 py-1 rounded whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4 text-sm sm:text-base">{exp.description}</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-xs sm:text-sm">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="leading-relaxed">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Technologies Used:</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {Object.entries(experienceData.skills).map(([category, skills]) => (
            <div key={category} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 capitalize flex items-center text-sm sm:text-base">
                <Briefcase className="mr-2" size={16} />
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {skills.map((skill, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education Section */}
      {activeSection === 'education' && (
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-2 sm:gap-0">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-base sm:text-lg">{homeData.education.degree}</h3>
                <p className="text-blue-600 font-medium text-sm sm:text-base">{homeData.education.university}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{homeData.education.grade}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-3 py-1 rounded whitespace-nowrap">
                {homeData.education.period}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Research Interests:</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {personalInfo.researchInterests.slice(0, 6).map((interest, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Languages:</h4>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                  {personalInfo.languages.map((lang, idx) => (
                    <li key={idx}>{lang}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Academic Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
            <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Academic Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Publications:</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{publicationsData.stats.totalPapers} peer-reviewed papers</p>
                <p className="text-gray-600 text-xs sm:text-sm">{publicationsData.stats.citations} total citations</p>
                <p className="text-gray-600 text-xs sm:text-sm">h-index: {publicationsData.stats.hIndex}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">Service:</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Reviewer for ACL-ARR, EMNLP, NAACL</p>
                <p className="text-gray-600 text-xs sm:text-sm">Program Committee Member</p>
                <p className="text-gray-600 text-xs sm:text-sm">Student Mentor (8 students)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVPage;