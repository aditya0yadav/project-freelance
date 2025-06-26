import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Terms', path: '/terms' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-red-600 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-blue-600 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.05, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10">
        {/* Red Top Border */}
        <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building2 className="h-10 w-10 text-red-500" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    SGB Group
                  </h3>
                  <p className="text-gray-400">Real Estate</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for plots, properties & investments near Yamuna Expressway.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
              <div className="space-y-3">
                {footerLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="block text-gray-300 hover:text-red-400 transition-all duration-300 hover:translate-x-2 hover:scale-105"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white">Contact Info</h4>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="h-5 w-5 text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-gray-300 text-sm">
                    <p>608, 6th Floor, Tradex Tower 2,</p>
                    <p>Alpha 1, Commercial Belt,</p>
                    <p>Greater Noida – 201310</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                  <a 
                    href="tel:+919891919244" 
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                  >
                    +91-9891919244
                  </a>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
                  <a 
                    href="mailto:kasanaji143@gmail.com" 
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                  >
                    kasanaji143@gmail.com
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 ${social.color} shadow-lg`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-center md:text-left">
              © 2024 SGB Group Of Real Estate. All rights reserved.
            </p>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;