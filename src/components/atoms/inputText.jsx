import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';

import ErrorMessage from '../errorMessage';

export default ({
  children,
  isNumeric = false,
  unit = '',
  type = 'text',
  name,
  register,
  setValue,
  required,
  error,
  ...props
}) => {
  useEffect(() => {
    register({ name, required });
  }, [register]);

  return (
    <div className="inputRow">
      <label htmlFor={name} className="labelInputText">
        {children}
      </label>
      {isNumeric ? (
        <NumberFormat
          suffix={unit}
          allowedDecimalSeparators={[',']}
          allowNegative={false}
          decimalSeparator=","
          decimalScale={2}
          name={name}
          onValueChange={({ floatValue: value }) => setValue(name, value)}
          required
          className="inputText"
          {...props}
        />
      ) : (
        <input
          type={type}
          ref={register({ required })}
          name={name}
          {...props}
        />
      )}

      {error && error.type === 'required' && (
        <ErrorMessage>Das ist ein Pflichtfeld.</ErrorMessage>
      )}
    </div>
  );
};
