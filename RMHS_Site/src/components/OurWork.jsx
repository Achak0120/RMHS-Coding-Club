import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const OurWork = () => {
  const projects = [
    {
      title: "South Middle School",
      description: "A modern, accessible website for students, parents, and staff with event calendars and news updates.",
      category: "Educational",
      image: "A modern school building with a clear blue sky"
    },
    {
      title: "Arlington Heights Eatery",
      description: "A vibrant website for a new local restaurant, featuring an online menu, reservation system, and photo gallery.",
      category: "Restaurant",
      image: "A cozy restaurant interior with warm lighting"
    },
    {
      title: "Mount Prospect Personal Services",
      description: "A professional and elegant portfolio site for a local service provider, enabling online booking and client testimonials.",
      category: "Service Industry",
      image: "A stylish and modern office reception area"
    },
    {
      title: "Rolling Meadows Cafe",
      description: "A charming and user-friendly website for a local cafe, boosting their online presence and customer engagement.",
      category: "Restaurant",
      image: "A close-up of a barista making latte art"
    }
  ];

  const handleViewSite = (title) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry!",
      description: `The link for "${title}" is not available yet. You can request it in your next prompt! 🚀`,
    });
  };

  return (
    <section id="work" className="py-24 bg-black">
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
              Our Work
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're proud to have partnered with these amazing local organizations. Here's a look at some of our recent projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-purple-500/20 rounded-xl overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/50 hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  alt={project.image}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Button
                  onClick={() => handleViewSite(project.title)}
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex items-center gap-2 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                  View Site
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;