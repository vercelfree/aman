// Left Sidebar Component
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
    <div className="w-full space-y-6">
      {/* Profile Image */}
      {/* <div className="flex justify-center">
        <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
          <span className="text-6xl font-bold text-white">MA</span>
        </div>
      </div> */}
      <div className="flex justify-center">
        <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
          <img
            src="/aman.png"
            alt="Mohammed Aman Bhuiyan"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 w-68 mb-2">
          {personalInfo.name}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {personalInfo.title}
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 text-center">
        <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
          <MapPin size={16} />
          <span>{personalInfo.contact.location}</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
          <Phone size={16} />
          <span>{personalInfo.contact.phone}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-3">
        {personalInfo.socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent
                size={18}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              <span className="text-sm">{link.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSidebar;
