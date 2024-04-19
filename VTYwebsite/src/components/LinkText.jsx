import React from 'react';

const LinkText = ({ children, clickHandler, item, className, ...rest }) => {
  const handleClick = () => {
    if (clickHandler) {
      clickHandler(item);
    }
  };

  return (
    <span
      className={`text-blue-500 underline cursor-pointer ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </span>
  );
};

export default LinkText;