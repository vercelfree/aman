// Home.jsx Component
import { Mail, Github, BookOpen, ExternalLink, Calendar, FileText, Award, MapPin, Phone, User, Briefcase, GraduationCap } from 'lucide-react';
import homeData from "../data/home";
import personalInfo from "../data/personalInfo";
import newsData from "../data/news";

const HomePage = () => {
  return (
    <div className="space-y-8">
      {/* About Me Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <User className="mr-2" size={20} />
          About Me
        </h3>
        {homeData.about.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed text-justify mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <GraduationCap className="mr-2" size={20} />
          Education
        </h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800">{homeData.education.degree}</h4>
          <p className="text-blue-600 font-medium">{homeData.education.university}</p>
          <p className="text-gray-600 text-sm">{homeData.education.period}</p>
          <p className="text-gray-600 text-sm">{homeData.education.grade}</p>
        </div>
      </div>

      {/* Research Interests */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Research Interests</h3>
        <div className="flex flex-wrap gap-2">
          {personalInfo.researchInterests.map((interest, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Recent News Preview */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Calendar className="mr-2" size={20} />
          Recent Updates
        </h3>
        <ul className="space-y-3">
          {newsData.updates.slice(0, 3).map((item) => (
            <li key={item.id} className="flex items-start space-x-3">
              <span className="font-medium text-gray-800 min-w-max">{item.date}:</span>
              <span className={`text-gray-700 ${item.highlight ? 'font-medium' : ''}`}>
                {item.content} {item.highlight && <span className="text-red-500">🎉</span>}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-blue-600 text-sm mt-3 cursor-pointer hover:underline">View all updates →</p>
      </div>

      {/* Selected Publications Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <FileText className="mr-2" size={20} />
          Selected Publications
        </h3>
        <div className="space-y-6">
          {homeData.selectedPublications.map((pub, index) => (
            <div key={pub.id} className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-medium text-gray-800 mb-2">
                {index + 1}. {pub.title}
              </h4>
              <p className="text-sm text-blue-600 mb-1">{pub.venue}</p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Authors - </span>{pub.authors}
              </p>
              <div className="space-x-2">
                <a href={pub.paperUrl} className="text-blue-600 text-sm hover:underline">
                  [Paper]
                </a>
                <a href={pub.codeUrl} className="text-blue-600 text-sm hover:underline">
                  [Code]
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-blue-600 text-sm mt-3 cursor-pointer hover:underline">View all publications →</p>
      </div>
    </div>
  );
};

export default HomePage;