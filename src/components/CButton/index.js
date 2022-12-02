import React from 'react';
import {Button} from 'react-bootstrap';
import 'assets/CButton.scss';

const CButton = ({
                   children,
                   className,
                   ...rest
                 }) => {
  return <Button className={`btn ${className}`} {...rest}>{children}</Button>;
}

export default CButton;
