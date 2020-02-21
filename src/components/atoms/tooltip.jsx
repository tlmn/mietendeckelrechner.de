import React from 'react';

export default ({ children, tip }) => (
  <p data-tip={tip} className="tooltip">
    {children}
  </p>
);
