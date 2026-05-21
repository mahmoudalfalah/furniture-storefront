import React from 'react';
import { cn } from '@/utils/cn';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

const Container = ({ 
  children, 
  className, 
  as: Component = 'div' 
}: ContainerProps) => {
  return (
    <Component 
      className={cn(
        "w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;