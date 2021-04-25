import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.css';

const Backdrop = props => <div className={classes.Backdrop} onClick={props.onClick} />;

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
