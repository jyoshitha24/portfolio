import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
  delay: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, link, delay }) => {
  const content = (
    <div className="flex items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-gray-900 dark:text-white font-medium">{value}</p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: <Phone size={24} />,
      title: "Mobile",
      value: "+91 7036419729",
      link: "tel:+917036419729",
      delay: 1
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "chjyoshithareddy@gmail.com",
      link: "mailto:chjyoshithareddy@gmail.com",
      delay: 2
    },
    {
      icon: <Mail size={24} />,
      title: "Academic Email",
      value: "22211A6723@bvrit.ac.in",
      link: "mailto:22211A6723@bvrit.ac.in",
      delay: 3
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/chandrapu-jyoshitha-reddy-97b247259/",
      delay: 4
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact Me" subtitle="Get in touch" />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <ContactItem 
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
              link={item.link}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
