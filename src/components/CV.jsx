// CV.jsx Component
import { useState } from "react";
import experienceData from "../data/experience";
import homeData from "../data/home";
import personalInfo from "../data/personalInfo";
import publicationsData from "../data/publications";

const CVPage = () => {
  const [activeSection, setActiveSection] = useState('experience');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Curriculum Vitae</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
          Download PDF
        </button>
      </div>

      {/* Section Navigation */}
      <div className="flex space-x-4 border-b border-gray-200">
        {['experience', 'skills', 'education'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`pb-2 px-1 text-sm font-medium capitalize transition-colors duration-200 ${
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
        <div className="space-y-6">
          {experienceData.experiences.map((exp) => (
            <div key={exp.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.organization}</p>
                  <p className="text-gray-600 text-sm">{exp.location} • {exp.type}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-gray-800 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
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
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(experienceData.skills).map(([category, skills]) => (
            <div key={category} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 capitalize flex items-center">
                <Briefcase className="mr-2" size={18} />
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
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
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{homeData.education.degree}</h3>
                <p className="text-blue-600 font-medium">{homeData.education.university}</p>
                <p className="text-gray-600 text-sm">{homeData.education.grade}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                {homeData.education.period}
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Research Interests:</h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.researchInterests.slice(0, 6).map((interest, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Languages:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {personalInfo.languages.map((lang, idx) => (
                    <li key={idx}>{lang}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Academic Information */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Academic Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Publications:</h4>
                <p className="text-gray-600 text-sm">{publicationsData.stats.totalPapers} peer-reviewed papers</p>
                <p className="text-gray-600 text-sm">{publicationsData.stats.citations} total citations</p>
                <p className="text-gray-600 text-sm">h-index: {publicationsData.stats.hIndex}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Service:</h4>
                <p className="text-gray-600 text-sm">Reviewer for ACL-ARR, EMNLP, NAACL</p>
                <p className="text-gray-600 text-sm">Program Committee Member</p>
                <p className="text-gray-600 text-sm">Student Mentor (8 students)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default CVPage;