import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
    >
      <div className="mb-4 p-3 bg-teal-50 rounded-full w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;