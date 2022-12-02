import React from 'react';
import 'assets/Input.scss';

const Input = ({
                 className,
                 ...rest
               }) => {
  return (
    <input className={`form-control input ${className}`} {...rest} />
  );
}

export default Input;
