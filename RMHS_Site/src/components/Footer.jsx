import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Code className="w-7 h-7 text-purple-400" />
            <span className="text-lg font-bold text-white">RMHS Coding Club</span>
          </div>
          <p className="text-gray-400 mb-4">
            Building community through code.
          </p>
          <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-amber-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('work')} className="text-gray-400 hover:text-amber-400 transition-colors">Work</button>
            <button onClick={() => scrollToSection('team')} className="text-gray-400 hover:text-amber-400 transition-colors">Team</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-amber-400 transition-colors">Contact</button>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Rolling Meadows High School Coding Club. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;