import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = (props) => {
  const cls = [
    classes.Button,
    classes[props.type],
  ];

  return (
    <button
      onClick={props.onClick}
      className={cls.join(' ')}
      disabled={props.disabled}
    >
      {props.children}
    </button>

  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
