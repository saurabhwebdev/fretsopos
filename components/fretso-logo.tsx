import React from 'react';

interface FretsoLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function FretsoLogo({ size = 'md', className = '' }: FretsoLogoProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-5xl',
    xl: 'text-6xl md:text-7xl lg:text-8xl',
  };

  return (
    <h1 
      className={`font-[family-name:var(--font-pacifico)] font-bold text-[#E50914] ${sizeClasses[size]} ${className}`}
      style={{ letterSpacing: '0.05em' }}
    >
      Fretso
    </h1>
  );
}
