import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Heart } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm Jyoshitha Reddy Chandrapu, a B.Tech student passionate about Web Development and Data Science. I'm a motivated individual focused on building interactive web applications and solving real-world problems using modern technologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Currently pursuing my Bachelor's degree in Computer Science and Engineering with a specialization in Data Science at B.V. Raju Institute of Technology (2022–2026), I've maintained a strong academic record with a CGPA of 8.86.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I am constantly expanding my knowledge and skills in various areas of computer science, with a particular focus on web development technologies and data science applications. My goal is to leverage these skills to create innovative solutions that make a positive impact.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Date of Birth</p>
                    <p className="text-gray-900 dark:text-white">24-September-2004</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white">India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Studying</p>
                    <p className="text-gray-900 dark:text-white">B.Tech in CSE (Data Science)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                    <Heart size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Interests</p>
                    <p className="text-gray-900 dark:text-white">Web Development, Data Science, Badminton</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;