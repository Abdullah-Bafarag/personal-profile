import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend & Mobile Development',
    description: 'Modern, component-driven web interfaces and cross-platform mobile applications.',
    icon: 'layout',
    skills: [
      { name: 'React.js', category: 'Frontend', /* level: 'Advanced' */ },
      { name: 'Flutter', category: 'Frontend', /* level: 'Advanced' */ },
      { name: 'TypeScript', category: 'Frontend', /* level: 'Proficient' */ },
      { name: 'JavaScript (ES6+)', category: 'Frontend', /* level: 'Advanced' */ },
      { name: 'Astro.js', category: 'Frontend', /* level: 'Proficient' */ },
      { name: 'Tailwind CSS', category: 'Frontend', /* level: 'Advanced' */ },
      { name: 'Bootstrap', category: 'Frontend', /* level: 'Advanced' */ },
      { name: 'HTML5 & CSS3', category: 'Frontend', /* level: 'Expert' */ },
    ],
  },
  {
    name: 'Backend & Enterprise Frameworks',
    description: 'Server-side logic, enterprise frameworks, API integrations, and database architectures.',
    icon: 'server',
    skills: [
      // { name: 'C#', category: 'Backend', /* level: 'Advanced' */ },
      // { name: 'Frappe Framework', category: 'Backend', /* level: 'Advanced' */ },
      { name: 'REST APIs', category: 'Backend', /* level: 'Advanced' */ },
      { name: 'Node.js & Express', category: 'Backend', /* level: 'Proficient' */ },
      { name: 'MongoDB', category: 'Backend', /* level: 'Proficient' */ },
      { name: 'OOP & Clean Code', category: 'Backend', /* level: 'Advanced' */ },
      // { name: 'Python', category: 'Backend', /* level: 'Proficient' */ },
      { name: 'Firebase', category: 'Backend', /* level: 'Proficient' */ },
    ],
  },
  {
    name: 'Tools, DevOps & Platforms',
    description: 'Version control, development environments, API testing, and deployment platforms.',
    icon: 'wrench',
    skills: [
      { name: 'Git & GitHub', category: 'Tools & DevOps', /* level: 'Advanced' */ },
      { name: 'Vercel', category: 'Tools & DevOps', /* level: 'Advanced' */ },
      { name: 'Postman', category: 'Tools & DevOps', /* level: 'Advanced' */ },
      { name: 'VS Code', category: 'Tools & DevOps', /* level: 'Expert' */ },
      { name: 'Android Studio', category: 'Tools & DevOps', /* level: 'Proficient' */ },
      { name: 'Linux Basics', category: 'Tools & DevOps', /* level: 'Intermediate' */ },
      { name: 'Responsive Design', category: 'Tools & DevOps', /* level: 'Expert' */ },
      // { name: 'Agile & Scrum', category: 'Tools & DevOps', /* level: 'Proficient' */ },
    ],
  },
];
