import React from 'react';
import PropTypes from 'prop-types';

import classes from './AnswerItem.module.css';

const AnswerItem = (props) => {
  const cls = [classes.AnswerItem];

  if (props.state) {
    cls.push(classes[props.state]);
  }

  return (
    <li className={cls.join(' ')} onClick={() => props.onAnswerClick(props.answer.id)}>
      {props.answer.text}
    </li>
  );
};

AnswerItem.propTypes = {
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  answer: PropTypes.shape({ id: PropTypes.number, text: PropTypes.string }).isRequired,
};

export default AnswerItem;
