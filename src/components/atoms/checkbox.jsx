import React from 'react';

export default ({ name, children, register, ...props }) => (
  <div className="inputRow">
    <label className="labelcheckmark" htmlFor={name}>
      <input type="checkbox" name={name} id={name} {...props} ref={register} />

      <span className="checkmark" />
      {children}
    </label>
  </div>
);
