import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable microservices architecture serving 10M+ users. Implemented CI/CD pipelines reducing deployment time by 60%.",
      achievements: [
        "Architected cloud-native solutions reducing infrastructure costs by 40%",
        "Mentored team of 8 junior developers",
        "Led migration to Kubernetes, improving system reliability to 99.9%"
      ],
      technologies: ["React", "Node.js", "AWS", "Kubernetes", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLab",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed end-to-end solutions for fintech applications handling millions in transactions daily. Collaborated with cross-functional teams to deliver high-quality products.",
      achievements: [
        "Built real-time trading platform with sub-100ms latency",
        "Implemented security measures preventing $2M+ in potential fraud",
        "Optimized database queries improving performance by 300%"
      ],
      technologies: ["Python", "Django", "React", "Redis", "Docker"]
    },
    {
      title: "Software Engineer",
      company: "StartupVenture",
      location: "Remote",
      period: "2018 - 2020",
      description: "Joined early-stage startup as employee #5, helping scale from MVP to Series A funding. Built core platform features and established engineering best practices.",
      achievements: [
        "Developed MVP that secured $5M Series A funding",
        "Established code review processes and testing standards",
        "Scaled platform to handle 100x user growth"
      ],
      technologies: ["JavaScript", "Vue.js", "Express", "MongoDB", "AWS"]
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "AWS Certified Solutions Architect",
      description: "Professional level certification"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Tech Lead of the Year",
      description: "Company recognition 2023"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Open Source Contributor",
      description: "500+ contributions on GitHub"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey building innovative solutions and leading engineering teams
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 z-10"></div>

              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-cyan-400 mb-4">
                    <span className="font-semibold">{exp.company}</span>
                    <MapPin size={14} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Achievements & Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;