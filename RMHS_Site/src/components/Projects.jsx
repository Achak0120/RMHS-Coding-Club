import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Projects = () => {
  const projects = [
    {
      title: "Smart IoT Dashboard",
      description: "Real-time monitoring system for IoT devices with advanced analytics and predictive maintenance capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket", "D3.js"],
      category: "Full Stack",
      featured: true
    },
    {
      title: "AI-Powered Optimization Engine",
      description: "Machine learning system that optimizes industrial processes, reducing energy consumption by 30%.",
      technologies: ["Python", "TensorFlow", "Docker", "Kubernetes", "PostgreSQL"],
      category: "Machine Learning",
      featured: true
    },
    {
      title: "Distributed Microservices Platform",
      description: "Scalable microservices architecture handling millions of requests with 99.9% uptime.",
      technologies: ["Go", "Docker", "Kubernetes", "Redis", "gRPC"],
      category: "Backend",
      featured: false
    },
    {
      title: "Mobile AR Application",
      description: "Augmented reality app for industrial training with 3D visualization and interactive tutorials.",
      technologies: ["React Native", "ARKit", "Three.js", "Firebase"],
      category: "Mobile",
      featured: false
    },
    {
      title: "Blockchain Supply Chain",
      description: "Transparent supply chain tracking system using blockchain technology for authenticity verification.",
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
      category: "Blockchain",
      featured: false
    },
    {
      title: "Real-time Analytics Platform",
      description: "High-performance data processing platform for real-time business intelligence and reporting.",
      technologies: ["Apache Kafka", "Spark", "Elasticsearch", "Kibana", "Java"],
      category: "Data Engineering",
      featured: false
    }
  ];

  const handleProjectAction = (action, projectTitle) => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: `${action} for "${projectTitle}" isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest engineering projects showcasing innovation, technical expertise, and problem-solving skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="relative">
                <img  
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-48 object-cover"
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    onClick={() => handleProjectAction('Live Demo', project.title)}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white flex items-center gap-2"
                  >
                    <Play size={16} />
                    Live Demo
                  </Button>
                  <Button
                    onClick={() => handleProjectAction('GitHub Repository', project.title)}
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-white">{project.title}</h4>
                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-2 py-1 rounded text-xs font-medium">
                  {project.category}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-purple-300 text-xs px-2 py-1">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={() => handleProjectAction('View Details', project.title)}
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1"
                >
                  <ExternalLink size={14} />
                  View
                </Button>
                <Button
                  onClick={() => handleProjectAction('GitHub Repository', project.title)}
                  size="sm"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex items-center gap-1"
                >
                  <Github size={14} />
                  Code
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;