import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Users, HeartHandshake as Handshake, Target } from 'lucide-react';
import MemberCard from '@/components/MemberCard';

const About = () => {
  const features = [
    {
      icon: <Code className="w-10 h-10 text-purple-400" />,
      title: "Student-Led Design",
      description: "Creative, modern websites designed by the next generation of tech leaders."
    },
    {
      icon: <Handshake className="w-10 h-10 text-amber-400" />,
      title: "Community Focused",
      description: "We partner with local businesses to help them thrive in the digital world."
    },
    {
      icon: <Users className="w-10 h-10 text-purple-400" />,
      title: "Diverse Talent",
      description: "Our team brings a wide range of skills from coding to design and project management."
    },
    {
      icon: <Target className="w-10 h-10 text-amber-400" />,
      title: "Real-World Experience",
      description: "We provide students with hands-on experience building real projects for real clients."
    }
  ];

  const members = [
    { id: 1, name: 'Aishik C.', bio: 'National Top 10 martial artist, 4.65 GPA. Club President & Co-Founder. Proficient in Java, Python, HTML, CSS, C. Lead Electrical in FRC & Math Team Captain.' },
    { id: 2, name: 'Isaiah V.', bio: 'Robotics competitor (Robot Rumble, FRC). Outreach team member. Proficient in Java and HTML.' },
    { id: 3, name: 'Daniel D.', bio: 'Math Team member & esports competitor. Proficient Java programmer.' },
    { id: 4, name: 'Abi K.', bio: 'Vice President of Coding Club. Leader of outreach team. Skilled in HTML, CSS, and JavaScript.' },
    { id: 5, name: 'Desmond N.', bio: 'Math Team competitor & networking specialist. Proficient in Python, Java, HTML, CSS, C.' },
    { id: 6, name: 'Rayaan A.', bio: 'Development team member. Proficient in Java. Completed multiple PLTW engineering courses.' },
    { id: 7, name: 'Tirth P.', bio: 'Math Team member. Lead creative designer for animations. Proficient in HTML, Java. Robot Rumble competitor.' },
    { id: 8, name: 'Eashan N.', bio: 'Math Team competitor. Python/Java/HTML/CSS programmer. Creator of data science projects. Robot Rumble contributor.' },
    { id: 9, name: 'Shanmukh M.', bio: 'High-scoring Math Team competitor. Club Co-Founder. Robot Rumble engineer. Proficient in Java. DECA participant.' },
    { id: 10, name: 'Mrs. Knappik', bio: 'Club supervisor with degrees in Computer Science and Education. Experienced in teaching college-level coding. Skilled at guiding meetings and fostering teamwork.' },
  ];

  return (
    <section id="about" className="py-24 bg-black">
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
              Who We Are
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The RMHS Coding Club is a team of passionate students dedicated to applying our technical skills to support our local community. We believe in the power of technology to connect businesses with their customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-4 bg-gray-900/50 border border-purple-500/20 rounded-xl"
          >
            <div className="grid grid-cols-5 gap-4" style={{ perspective: '1000px' }}>
              {members.map((member, index) => (
                <MemberCard 
                  key={member.id} 
                  member={member} 
                  index={index}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              Our mission is twofold: to provide small businesses in our area with high-quality, affordable websites, and to give our members invaluable, real-world experience in software development, project management, and client relations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We serve businesses and organizations throughout Cook County and District 214, including Rolling Meadows, Mount Prospect, and Arlington Heights.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:border-amber-400"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;