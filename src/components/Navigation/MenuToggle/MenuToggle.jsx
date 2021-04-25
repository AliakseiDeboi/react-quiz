import React from 'react';
import PropTypes from 'prop-types';

import classes from './MenuToggle.module.css';

const MenuToggle = (props) => {
  const cls = [
    classes.MenuToggle,
    'fa',
  ];

  if (props.isOpen) {
    cls.push('fa-times');
    cls.push(classes.open);
  } else {
    cls.push('fa-bars');
  }

  return (
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  );
};

MenuToggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MenuToggle;
