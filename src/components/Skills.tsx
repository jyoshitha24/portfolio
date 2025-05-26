import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './common/SectionHeading';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{title}</h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="px-4 py-2 bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C"],
      delay: 1
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "ReactJS", "NodeJS", "Flask"],
      delay: 2
    },
    {
      title: "Tools & Databases",
      skills: ["Power BI", "Git", "Jupyter", "Google Colab", "MySQL"],
      delay: 3
    },
    {
      title: "Soft Skills",
      skills: ["Adaptability", "Teamwork", "Leadership", "Responsibility"],
      delay: 4
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" subtitle="What I can do" />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;