// Left Sidebar Component - Fully Responsive
import personalInfo from "../data/personalInfo";
import {
  Mail,
  Github,
  BookOpen,
  ExternalLink,
  Calendar,
  FileText,
  Award,
  MapPin,
  Phone,
  User,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const LeftSidebar = () => {
  return (
    <div className="w-full space-y-4 sm:space-y-6">
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
          <img
            src="/aman.png"
            alt="Mohammed Aman Bhuiyan"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center px-2">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">
          {personalInfo.name}
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          {personalInfo.title}
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 text-center px-2">
        <div className="flex items-center justify-center space-x-2 text-gray-600 text-xs sm:text-sm">
          <MapPin size={14} className="flex-shrink-0" />
          <span className="break-words">{personalInfo.contact.location}</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-600 text-xs sm:text-sm">
          <Phone size={14} className="flex-shrink-0" />
          <span>{personalInfo.contact.phone}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-2 sm:space-y-3 px-2">
        {personalInfo.socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 group py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent
                size={16}
                className="group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
              />
              <span className="text-xs sm:text-sm break-words">{link.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSidebar;