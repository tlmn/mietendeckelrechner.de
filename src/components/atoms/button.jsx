import React from 'react';

export default ({ className = '', children, ...props }) => (
  <button className={`button ${className}`} type="button" {...props}>
    {children}
  </button>
);
