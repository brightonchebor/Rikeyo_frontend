import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  title,
  footer,
  className = '',
  padding = true,
  shadow = true,
}) => {
  const cardClasses = `bg-white rounded-lg ${shadow ? 'shadow-md' : ''} ${className}`;
  const bodyClasses = padding ? 'p-6' : '';
  
  return (
    <div className={cardClasses}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          {typeof title === 'string' ? (
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          ) : (
            title
          )}
        </div>
      )}
      
      <div className={bodyClasses}>
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  footer: PropTypes.node,
  className: PropTypes.string,
  padding: PropTypes.bool,
  shadow: PropTypes.bool,
};

export default Card;