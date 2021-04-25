import React from 'react';
import PropTypes from 'prop-types';

import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index) => (
      <AnswerItem
        key={index}
        answer={answer}
        onAnswerClick={props.onAnswerClick}
        state={props.state ? props.state[answer.id] : null}
      />
    ))}
  </ul>
);

AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AnswersList;
