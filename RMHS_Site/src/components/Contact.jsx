import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Form submission is not yet active!",
      description: "We're working on it. For now, please reach out to us via email. You can request this feature in your next prompt! 🚀",
    });
  };

  return (
    <section id="contact" className="py-24 bg-black">
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
              Work With Us
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Need a website for your business? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    placeholder="John Doe" required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    placeholder="you@example.com" required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">Business/Organization Name</label>
                <input
                  type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  placeholder="e.g., The Local Cafe"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Tell us about your project</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-none"
                  placeholder="We're looking for a new website to showcase our products..." required
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Send size={18} className="mr-2" />
                  Send Inquiry
                </Button>
              </div>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-gray-400"
          >
            <p>You can also reach out to us directly:</p>
            <div className="flex justify-center items-center gap-4 mt-2">
              <a href="mailto:rmhsoutreachteam@gmail.com" className="flex items-center gap-2 text-amber-400 hover:text-amber-300">
                <Mail size={16} />
                rmhsoutreachteam@gmail.com
              </a>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <Building size={16} />
                <span>Rolling Meadows, IL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;