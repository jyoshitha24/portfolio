import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

interface EducationItemProps {
  title: string;
  institution: string;
  period: string;
  grade: string;
  delay: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ title, institution, period, grade, delay }) => {
  return (
    <motion.div 
      className="relative pl-8 pb-8 border-l-2 border-primary-200 dark:border-primary-800 last:border-0 last:pb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="absolute -left-[9px] top-0">
        <div className="w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-primary-100 dark:border-primary-900"></div>
      </div>
      
      <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-2">
          <BookOpen size={18} className="text-primary-600 dark:text-primary-400 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-1">{institution}</p>
        <p className="text-gray-500 dark:text-gray-400 mb-2">{period}</p>
        <div className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
          {grade}
        </div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  const educationItems = [
    {
      title: "B.Tech in CSE (Data Science)",
      institution: "B.V. Raju Institute of Technology",
      period: "2022 - 2026",
      grade: "CGPA: 8.86",
      delay: 1
    },
    {
      title: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      period: "2020 - 2022",
      grade: "Percentage: 96%",
      delay: 2
    },
    {
      title: "SSC",
      institution: "Sri Chaitanya School",
      period: "2020",
      grade: "CGPA: 10.0",
      delay: 3
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="My academic journey" />
        
        <div className="max-w-3xl mx-auto mt-16">
          {educationItems.map((item, index) => (
            <EducationItem 
              key={index}
              title={item.title}
              institution={item.institution}
              period={item.period}
              grade={item.grade}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;