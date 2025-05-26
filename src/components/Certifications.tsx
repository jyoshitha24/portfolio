import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Wrench } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay: number;
}

const Card: React.FC<CardProps> = ({ icon, title, items, delay }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400 mt-2 mr-2"></span>
            <span className="text-gray-700 dark:text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  const certifications = [
    "Java Fundamentals — Oracle",
    "Java Foundations — Oracle",
    "Advanced Spoken English — British Council",
    "Python Foundation Level — BitLabs",
    "Soft Skills — NPTEL",
    "Summer Of AI Internship Program — Swecha"
  ];

  const workshops = [
    "Datathon Workshop on Power BI — Data visualization and business analytics",
    "Blockchain Workshop — Introduction to Blockchain and Web3"
  ];

  const achievements = [
    "5-star Gold badge in Problem Solving on HackerRank",
    "Academic distinction in high school and intermediate",
    "Participated in multiple hackathons solving real-world challenges"
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications & Achievements" subtitle="Recognition and qualifications" />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            icon={<Award size={24} />} 
            title="Certifications" 
            items={certifications}
            delay={1}
          />
          
          <Card 
            icon={<Wrench size={24} />} 
            title="Workshops" 
            items={workshops}
            delay={2}
          />
          
          <Card 
            icon={<Trophy size={24} />} 
            title="Achievements" 
            items={achievements}
            delay={3}
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;