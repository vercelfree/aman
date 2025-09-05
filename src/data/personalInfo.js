import { SiGooglescholar, SiLinkedin, SiGithub } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';







const personalInfo = {
  name: "Mohammed Aman Bhuiyan",
  title: "Research Assistant",
  image: "./public/aman.png", 
  contact: {
    email: "aman@example.com",
  },
  socialLinks: [
  {
    icon: MdEmail,
    label: 'Email',
    value: 'aman@gmail.com',
    href: 'mailto:aman@gmail.com',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'github.com/amanbhuiyan',
    href: 'https://github.com/amanbhuiyan',
  },
  {
    icon: SiGooglescholar,
    label: 'Google Scholar',
    value: 'Scholar Profile',
    href: 'https://scholar.google.com/citations?user=YOUR_ID',
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/YOUR_PROFILE',
  },
],
  skills: ['Python', 'PyTorch', 'TensorFlow', 'Transformers', 'React', 'Node.js', 'JavaScript', 'Machine Learning', 'Deep Learning'],
  languages: ['Bengali (Native)', 'English (Fluent)', 'Hindi (Conversational)'],
  researchInterests: ['Natural Language Processing', 'Multimodal AI', 'Low-resource Languages', 'Hate Speech Detection', 'Computer Vision', 'Variational Autoencoders', 'State Space Models', 'Diffusion Models']
};


export default personalInfo;





