import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowUpRight, Brain, Guitar as Hospital, Book, Coins } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

interface Project {
  id: number;
  title: string;
  description: string;
  period: string;
  techStack: string[];
  icon: React.ReactNode;
  link?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
  {
    id: 1,
    title: "Brain Stroke Prediction and Classification",
    description: "Built a CNN model using TensorFlow and Keras to classify stroke types from medical images.",
    period: "Mar 2024 - June 2024",
    techStack: ["Python", "CNN", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    icon: <Brain className="h-6 w-6" />,
    link: "https://github.com/jyoshitha24/Brain-Stroke-Detection-and-its-Classification"
  },
  {
    id: 2,
    title: "Knee Osteoarthritis Severity Predictor",
    description: "Used EfficientNet-B0 in PyTorch to classify X-ray images into five severity levels. Built a Flask web app for image uploads and severity output.",
    period: "Jan 2025 - Apr 2025",
    techStack: ["Python", "Flask", "PyTorch", "EfficientNet", "HTML", "CSS", "Scikit-learn"],
    icon: <Hospital className="h-6 w-6" />,
    link: "https://github.com/jyoshitha24/KOA/"
  },
  {
    id: 3,
    title: "Currency Converter",
    description: "Java Swing desktop application for real-time currency conversion across international currencies. Integrated RESTful API using HTTP GET and JSON parsing for live exchange rates.",
    period: "Jan 2024",
    techStack: ["Java", "Java Swing"],
    icon: <Coins className="h-6 w-6" />,
    link: "https://github.com/jyoshitha24/currency_converter"
  },
  {
    id: 4,
    title: "Hospital Appointment System",
    description: "Full-stack system with role-based dashboards for users and doctors.",
    period: "Ongoing",
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
    icon: <Hospital className="h-6 w-6" />,
    link: "https://github.com/yourusername/hospital-appointment-system"
  }
];


  const toggleProject = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" subtitle="My recent work" />
        
        <div className="mt-16 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <div 
                className={`bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                  activeProject === project.id ? 'ring-2 ring-primary-500' : 'hover:shadow-lg'
                }`}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleProject(project.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    </div>
                    <span className="text-primary-600 dark:text-primary-400">
                      <ArrowUpRight 
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          activeProject === project.id ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </div>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{project.period}</p>
                </div>
                
                {activeProject === project.id && (
                  <div className="px-6 pb-6 pt-2 animate-slide-up">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Technologies used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-sm text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
