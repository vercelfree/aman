import { Mail, Github, BookOpen, LinkedinIcon} from 'lucide-react';

const personalInfo = {
  name: "Mohammed Aman Bhuiyan",
  title: "Research Assistant",
  image: "./public/aman.png", 
  contact: {
    email: "aman@example.com",
  },
  socialLinks: [
    { icon: Mail, label: 'Email', value: 'aman@gmail.com', href: 'mailto:aman@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/amanbhuiyan', href: 'https://github.com/' },
    { icon: BookOpen, label: 'Google Scholar', value: 'Scholar Profile', href: 'https://scholar.google.com' },
    { icon: LinkedinIcon, label: 'Linked in', value: 'ORCID Profile', href: 'https://linkedin.com' },

  ],
  skills: ['Python', 'PyTorch', 'TensorFlow', 'Transformers', 'React', 'Node.js', 'JavaScript', 'Machine Learning', 'Deep Learning'],
  languages: ['Bengali (Native)', 'English (Fluent)', 'Hindi (Conversational)'],
  researchInterests: ['Natural Language Processing', 'Multimodal AI', 'Low-resource Languages', 'Hate Speech Detection', 'Computer Vision', 'Variational Autoencoders', 'State Space Models', 'Diffusion Models']
};


export default personalInfo;