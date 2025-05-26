import React from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  
  return (
    <div className="flex items-center">
      <div className="mr-2 rounded-full bg-teal-500 p-1.5">
        <Globe size={22} className="text-white" />
      </div>
      <span className={`text-xl font-bold ${textColor}`}>
        {/* Global<span className="text-teal-500">Trade</span>Hub */}
        Global<span className="text-red-500">Trade</span>Hub
      </span>
    </div>
  );
};

export default Logo;