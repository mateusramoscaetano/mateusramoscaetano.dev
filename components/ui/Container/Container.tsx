import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const Container: React.FC<ContainerProps> = ({
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