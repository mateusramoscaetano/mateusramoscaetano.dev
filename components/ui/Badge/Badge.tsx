import React from 'react';
import { BadgeProps } from '../../../lib/types';

const Badge: React.FC<BadgeProps> = ({
  variant = 'technology',
  children,
  color = 'gray',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  
  const colorClasses = {
    blue: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    violet: 'bg-violet-500/20 text-violet-300 border border-violet-500/30',
    pink: 'bg-pink-500/20 text-pink-300 border border-pink-500/30',
    gray: 'bg-gray-800 text-gray-300 border border-gray-700'
  };
  
  const variantClasses = {
    technology: 'font-mono',
    status: 'font-sans',
    category: 'font-sans font-semibold'
  };
  
  const classes = `${baseClasses} ${colorClasses[color]} ${variantClasses[variant]} ${className}`;
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge; 