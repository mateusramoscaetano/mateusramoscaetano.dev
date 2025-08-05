import React from 'react';
import { CardProps } from '../../../lib/types';

const Card: React.FC<CardProps> = ({
  variant = 'project',
  title,
  description,
  image,
  tags = [],
  className = '',
  children
}) => {
  const baseClasses = 'bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors duration-300';
  
  const variantClasses = {
    project: 'p-6',
    experience: 'p-6 border-l-2 border-gray-800',
    skill: 'p-4 text-center'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (variant === 'project') {
    return (
      <div className={classes}>
        {image && (
          <div className="aspect-video rounded-lg mb-4 overflow-hidden bg-gray-800">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        {description && (
          <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
        )}
        {tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                {tag}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    );
  }
  
  if (variant === 'experience') {
    return (
      <div className={classes}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {tags.length > 0 && (
            <span className="text-gray-400 text-sm">{tags[0]}</span>
          )}
        </div>
        {description && (
          <p className="text-gray-300 mb-2">{description}</p>
        )}
        {tags.length > 1 && (
          <div className="flex gap-2 flex-wrap mt-3">
            {tags.slice(1).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-700">
                {tag}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    );
  }
  
  return (
    <div className={classes}>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      {description && (
        <p className="text-gray-400 text-sm">{description}</p>
      )}
      {children}
    </div>
  );
};

export default Card; 