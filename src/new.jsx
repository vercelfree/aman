import React, { useState } from 'react';
import { Mail, Github, BookOpen, ExternalLink, Calendar, FileText, Award } from 'lucide-react';

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'publications', label: 'Publications' },
    { id: 'experience', label: 'Experience' },
    { id: 'cv', label: 'CV' }
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-gray-800">Mohammed Aman Bhuiyan</h1>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Left Sidebar Component
const LeftSidebar = () => {
  const socialLinks = [
    { icon: Mail, label: 'Email', value: 'aman@example.com', href: 'mailto:aman@example.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/amanbhuiyan', href: 'https://github.com/amanbhuiyan' },
    { icon: BookOpen, label: 'Google Scholar', value: 'Scholar Profile', href: 'https://scholar.google.com' },
    { icon: Award, label: 'ORCID', value: 'ORCID Profile', href: 'https://orcid.org' },
    { icon: ExternalLink, label: 'Kaggle', value: 'Kaggle Profile', href: 'https://kaggle.com' }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
          <span className="text-6xl font-bold text-white">MA</span>
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Mohammed Aman Bhuiyan</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Research Assistant, CCDS Lab & AI/ML Researcher (Penta Global Limited)
        </p>
      </div>

      {/* Social Links */}
      <div className="space-y-3">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent size={18} className="group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm">{link.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  const newsUpdates = [
    { date: 'January 2025', content: 'Paper accepted in NAACL 2025 - Findings', highlight: true },
    { date: 'December 2024', content: 'Reviewing @ December ACL-ARR 2024', highlight: false },
    { date: 'October 2024', content: 'Reviewing @ October ACL-ARR 2024 [NAACL-2025]', highlight: false },
    { date: 'September 2024', content: 'Paper accepted in EMNLP 2024 - Findings', highlight: true },
    { date: 'August 2024', content: 'Two papers have been accepted in ICPR 2024', highlight: true },
    { date: 'July 2024', content: 'One paper has been accepted in ECAI 2024', highlight: true }
  ];

  const publications = [
    {
      title: 'BanglaTLit: A Benchmark Dataset for Back-Transliteration of Romanized Bangla',
      venue: 'EMNLP-2024 [Findings]',
      authors: 'Md Fahim, Fariha Tanjim Shifat, Fabiha Haider, Deeparghya Dutta Barua, Md Sakib Ul Rahman Sourove, Md Farhan Ishmam, Farhad Alam Bhuiyan',
      paper: '[Paper]'
    },
    {
      title: 'Improving the Performance of Transformer-based Models Over Classical Baselines in Hate Speech Detection',
      venue: 'ICPR-2024',
      authors: 'Mohammed Aman Bhuiyan, Fariha Tanjim Shifat, Md Fahim, Fabiha Haider',
      paper: '[Paper]'
    }
  ];

  return (
    <div className="space-y-8">
      {/* About Me Section */}
      <div>
        <p className="text-gray-700 leading-relaxed text-justify">
          Hello, I'm Mohammed Aman Bhuiyan. I am currently working as a Research Assistant in the{' '}
          <span className="text-blue-600 font-medium">CCDS Lab</span> at IUB, and I also work part-time as an AI/ML Researcher at{' '}
          <span className="text-blue-600 font-medium">Penta Global Limited</span>. I earned my B.Sc. degree in Computer Science and Engineering from the University of Dhaka.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify mt-4">
          My research interests are primarily in Natural Language Processing (NLP) and Multimodality. In the field of NLP, I focus on areas such as low-resource languages, hate speech detection, and improving the inference speed of language models. In multimodal research, I am engaged in projects related to visual question answering, modality alignment, addressing modality gaps, and developing multimodal adapters. Additionally, I have also explored several important & popular topics Variational Autoencoders (VAEs), Posterior Collapse, State Space Models (SSMs), and Diffusion models.
        </p>
      </div>

      {/* News and Updates Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Calendar className="mr-2" size={20} />
          News and Updates
        </h3>
        <ul className="space-y-3">
          {newsUpdates.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="font-medium text-gray-800 min-w-max">{item.date}:</span>
              <span className={`text-gray-700 ${item.highlight ? 'font-medium' : ''}`}>
                {item.content} {item.highlight && <span className="text-red-500">🎉</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Selected Publications Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <FileText className="mr-2" size={20} />
          Selected Publications
        </h3>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-medium text-gray-800 mb-2">
                {index + 1}. {pub.title}
              </h4>
              <p className="text-sm text-blue-600 mb-1">{pub.venue}</p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Authors - </span>{pub.authors}
              </p>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                {pub.paper}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Publications Page Component
const PublicationsPage = () => {
  const publications = [
    {
      title: 'BanglaTLit: A Benchmark Dataset for Back-Transliteration of Romanized Bangla',
      venue: 'EMNLP-2024 [Findings]',
      authors: 'Md Fahim, Fariha Tanjim Shifat, Fabiha Haider, Deeparghya Dutta Barua, Md Sakib Ul Rahman Sourove, Md Farhan Ishmam, Farhad Alam Bhuiyan',
      year: '2024',
      type: 'Conference'
    },
    {
      title: 'Improving the Performance of Transformer-based Models Over Classical Baselines in Hate Speech Detection',
      venue: 'ICPR-2024',
      authors: 'Mohammed Aman Bhuiyan, Fariha Tanjim Shifat, Md Fahim, Fabiha Haider',
      year: '2024',
      type: 'Conference'
    },
    {
      title: 'Multimodal Learning for Visual Question Answering in Low-Resource Settings',
      venue: 'ECAI-2024',
      authors: 'Mohammed Aman Bhuiyan, Fabiha Haider, Md Fahim',
      year: '2024',
      type: 'Conference'
    },
    {
      title: 'State Space Models for Enhanced Language Understanding',
      venue: 'NAACL-2025 [Findings]',
      authors: 'Mohammed Aman Bhuiyan, Deeparghya Dutta Barua, Fariha Tanjim Shifat',
      year: '2025',
      type: 'Conference'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Publications</h2>
      
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-gray-800 text-lg leading-tight">{pub.title}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">{pub.year}</span>
            </div>
            <p className="text-blue-600 font-medium text-sm mb-2">{pub.venue}</p>
            <p className="text-gray-600 text-sm mb-3">{pub.authors}</p>
            <div className="flex items-center justify-between">
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{pub.type}</span>
              <div className="space-x-2">
                <a href="#" className="text-blue-600 text-sm hover:underline">Paper</a>
                <a href="#" className="text-blue-600 text-sm hover:underline">Code</a>
                <a href="#" className="text-blue-600 text-sm hover:underline">BibTeX</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Experience Page Component
const ExperiencePage = () => {
  const experiences = [
    {
      title: 'Research Assistant',
      organization: 'CCDS Lab, Independent University Bangladesh (IUB)',
      period: '2023 - Present',
      description: 'Working on Natural Language Processing and Multimodal AI research projects. Focus on low-resource languages and hate speech detection.',
      highlights: ['Published 4+ papers in top-tier conferences', 'Leading multimodal research initiatives', 'Mentoring undergraduate students']
    },
    {
      title: 'AI/ML Researcher (Part-time)',
      organization: 'Penta Global Limited',
      period: '2023 - Present',
      description: 'Developing AI/ML solutions for commercial applications. Working on computer vision and NLP projects.',
      highlights: ['Deployed ML models in production', 'Improved model inference speed by 40%', 'Collaborated with cross-functional teams']
    },
    {
      title: 'Research Intern',
      organization: 'University of Dhaka - CSE Department',
      period: '2022 - 2023',
      description: 'Conducted research on Variational Autoencoders and State Space Models under faculty supervision.',
      highlights: ['Implemented novel VAE architectures', 'Contributed to diffusion model research', 'Presented findings at department seminars']
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{exp.title}</h3>
                <p className="text-blue-600 font-medium">{exp.organization}</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">{exp.period}</span>
            </div>
            <p className="text-gray-700 mb-4">{exp.description}</p>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Key Highlights:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// CV Page Component
const CVPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Curriculum Vitae</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <div className="text-center mb-8">
          <div className="bg-blue-100 rounded-lg p-6">
            <FileText size={48} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Download CV</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the complete curriculum vitae with detailed information about education, research, and achievements.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Download PDF
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Education</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>B.Sc. in Computer Science and Engineering</strong></p>
              <p>University of Dhaka</p>
              <p>2019 - 2023</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Research Interests</h4>
            <div className="flex flex-wrap gap-2">
              {['Natural Language Processing', 'Multimodal AI', 'Low-resource Languages', 'Hate Speech Detection', 'Computer Vision'].map((interest, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'PyTorch', 'TensorFlow', 'Transformers', 'React', 'Node.js'].map((skill, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Languages</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Bengali (Native)</p>
              <p>English (Fluent)</p>
              <p>Hindi (Conversational)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main New Component
const New = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'publications':
        return <PublicationsPage />;
      case 'experience':
        return <ExperiencePage />;
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
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <LeftSidebar />
            </div>
          </div>
          
          {/* Main Content */}
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

export default New;