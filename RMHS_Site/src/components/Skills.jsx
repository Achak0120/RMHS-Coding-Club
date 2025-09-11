import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Brain, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Monitoring"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "PWA", "Expo"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Computer Vision", "NLP"],
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Blockchain",
      skills: ["Cybersecurity", "Solidity", "Web3", "Smart Contracts", "Encryption", "Auditing"],
      color: "from-red-500 to-pink-500"
    }
  ];

  const proficiencyLevels = [
    { skill: "JavaScript/TypeScript", level: 95 },
    { skill: "React/Next.js", level: 92 },
    { skill: "Python", level: 88 },
    { skill: "Node.js", level: 85 },
    { skill: "Cloud Architecture", level: 82 },
    { skill: "Machine Learning", level: 78 }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className={`text-transparent bg-gradient-to-r ${category.color} bg-clip-text mb-4 flex justify-center`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`bg-gradient-to-r ${category.color} bg-opacity-20 text-white px-3 py-1 rounded-full text-sm border border-opacity-30 hover:border-opacity-60 transition-all duration-200`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{item.skill}</span>
                  <span className="text-purple-400 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;