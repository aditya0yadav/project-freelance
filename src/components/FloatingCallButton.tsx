import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:+919891919244"
      className="fixed bottom-6 right-6 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="w-14 h-14 bg-red-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Phone className="h-6 w-6 text-white" />
      </div>
      <motion.div
        className="absolute inset-0 bg-red-700 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.a>
  );
};

export default FloatingCallButton;