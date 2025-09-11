import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Code, Brain, Bot as Robot, Palette } from 'lucide-react';

const OurTeam = () => {
  const teamStats = [
    { icon: <Users size={32} className="text-purple-400" />, value: '15+', label: 'Dedicated Members' },
    { icon: <GraduationCap size={32} className="text-amber-400" />, value: '4', label: 'Grade Levels' },
    { icon: <Code size={32} className="text-purple-400" />, value: '30+', label: 'Diverse Backgrounds' },
  ];

  const backgrounds = [
    { icon: <Code size={24} className="text-purple-400" />, name: 'Computer Science' },
    { icon: <Brain size={24} className="text-amber-400" />, name: 'Data Science' },
    { icon: <Code size={24} className="text-purple-400" />, name: 'Competitive Math' },
    { icon: <Robot size={24} className="text-amber-400" />, name: 'Robotics' },
    { icon: <Palette size={24} className="text-purple-400" />, name: 'Mechanical Design' },
  ];

  return (
    <section id="team" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our club is powered by a diverse group of passionate high school students, united by a love for coding and a drive to make a real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-2xl border border-purple-500/20"
          >
            <img src="https://horizons-cdn.hostinger.com/6ab6e5b9-3041-4929-9341-abfaeb61edf2/7279fc1a37f854d36c68a2bbcea09dce.jpg" alt="Rolling Meadows High School Coding Club students collaborating on laptops" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Collaboration & Innovation</h3>
              <p className="text-gray-300">
                We believe in hands-on learning and collaborative problem-solving. Our members work together to bring creative web solutions to life.
              </p>
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {teamStats.map((stat, index) => (
                <div key={index} className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-6 text-center shadow-lg">
                  <div className="mb-3 flex justify-center">{stat.icon}</div>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Diverse Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {backgrounds.map((bg, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4 border border-amber-400/20">
                    {bg.icon}
                    <span className="text-lg text-gray-200">{bg.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;