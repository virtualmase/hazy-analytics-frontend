import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = '', showText = true, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <svg 
        className={sizeClasses[size]} 
        viewBox="0 0 32 32" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            .stroke {
              stroke: currentColor;
            }
            .fill {
              fill: currentColor;
            }
          `}
        </style>
        <path
          className="stroke"
          fillRule="evenodd"
          d="M16.1 16.04 1 8.02 6.16 5.3l5.82 3.09 4.88-2.57-5.82-3.1L16.21 0l15.1 8.02-5.17 2.72-5.5-2.91-4.88 2.57 5.5 2.92-5.16 2.72Z"
        />
        <path
          className="fill"
          fillRule="evenodd"
          d="M16.1 32 1 23.98l5.16-2.72 5.82 3.08 4.88-2.57-5.82-3.08 5.17-2.73 15.1 8.02-5.17 2.72-5.5-2.92-4.88 2.58 5.5 2.92L16.1 32Z"
        />
      </svg>
      {showText && (
        <span className={`font-bold hazy-text ${textSizes[size]}`}>
          Hazy
        </span>
      )}
    </Link>
  );
};

export default Logo; 