import { Mail, Github, BookOpen, ExternalLink, Calendar, FileText, Award, MapPin, Phone, User, Briefcase, GraduationCap } from 'lucide-react';

const personalInfo = {
  name: "Mohammed Aman Bhuiyan",
  title: "Research Assistant, CCDS Lab & AI/ML Researcher (Penta Global Limited)",
  image: "./public/aman.png", 
  contact: {
    email: "aman@example.com",
    phone: "+880-123-456-789",
    location: "Dhaka, Bangladesh"
  },
  socialLinks: [
    { icon: Mail, label: 'Email', value: 'aman@gmail.com', href: 'mailto:aman@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/amanbhuiyan', href: 'https://github.com/' },
    { icon: BookOpen, label: 'Google Scholar', value: 'Scholar Profile', href: 'https://scholar.google.com' },
    { icon: Award, label: 'ORCID', value: 'ORCID Profile', href: 'https://orcid.org' },
    { icon: ExternalLink, label: 'Kaggle', value: 'Kaggle Profile', href: 'https://kaggle.com' }
  ],
  skills: ['Python', 'PyTorch', 'TensorFlow', 'Transformers', 'React', 'Node.js', 'JavaScript', 'Machine Learning', 'Deep Learning'],
  languages: ['Bengali (Native)', 'English (Fluent)', 'Hindi (Conversational)'],
  researchInterests: ['Natural Language Processing', 'Multimodal AI', 'Low-resource Languages', 'Hate Speech Detection', 'Computer Vision', 'Variational Autoencoders', 'State Space Models', 'Diffusion Models']
};


export default personalInfo;