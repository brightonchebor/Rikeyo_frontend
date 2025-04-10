import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  fullWidth = false,
}) => {
  const baseClasses = 'font-medium rounded focus:outline-none transition-colors duration-200';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
  };
  
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClass} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Button;