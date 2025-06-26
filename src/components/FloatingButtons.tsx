import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const FloatingButtons = () => {
  const buttons = [
    {
      icon: Phone,
      href: 'tel:+919891919244',
      color: 'bg-green-500 hover:bg-green-600',
      label: 'Call Us',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/919891919244',
      color: 'bg-green-600 hover:bg-green-700',
      label: 'WhatsApp',
    },
    {
      icon: Mail,
      href: '/contact',
      color: 'bg-purple-600 hover:bg-purple-700',
      label: 'Contact Us',
    },
  ];

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col space-y-4">
      {buttons.map((button, index) => (
        <motion.a
          key={button.label}
          href={button.href}
          target={button.href.startsWith('http') ? '_blank' : '_self'}
          rel={button.href.startsWith('http') ? 'noopener noreferrer' : ''}
          className={`group relative ${button.color} rounded-full p-4 shadow-2xl transition-all duration-300`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: index * 0.2 + 1,
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}
          whileTap={{ scale: 0.9 }}
        >
          <button.icon className="h-6 w-6 text-white" />
          
          {/* Ripple Effect */}
          <motion.div
            className={`absolute inset-0 rounded-full ${button.color.split(' ')[0]} opacity-30`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
              {button.label}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingButtons;