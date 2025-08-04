import React from 'react';
import { ContainerProps } from '../../../lib/types';

const Container: React.FC<ContainerProps & { as?: keyof React.JSX.IntrinsicElements }> = ({
  children,
  className = '',
  as: Component = 'div'
}) => {
  const baseClasses = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
  const classes = `${baseClasses} ${className}`;
  
  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

export default Container; 