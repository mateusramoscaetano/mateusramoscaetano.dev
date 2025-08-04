import React from 'react';
import { ButtonProps } from '../../../lib/types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  icon,
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'flex items-center gap-2 justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const variantClasses = {
    primary: 'bg-white text-gray-900 hover:bg-gray-100 rounded-full flex items-center gap-2',
    secondary: 'border border-gray-600 text-white hover:border-gray-500 rounded-full',
    icon: 'w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-500'
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && variant !== 'icon' && icon}
      {children}
      {icon && variant === 'icon' && icon}
    </button>
  );
};

export default Button; 