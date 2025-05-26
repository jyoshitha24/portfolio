import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Resume & Video" subtitle="My professional profile" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Local Video Resume with Controls */}
          <div className="aspect-video">
            <video
              controls
              className="w-full h-full rounded-xl shadow-md object-cover"
            >
              <source src="/resume.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Download Resume */}
          <div className="text-center md:text-left ml-10"> {/* <-- Added ml-6 here */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Download My CV
            </h3>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
            >
              <Download size={20} />
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
