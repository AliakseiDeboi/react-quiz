import React from 'react';
import PropTypes from 'prop-types';

import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.answerNumber}. </strong>
        {props.question}
      </span>
      <small>{props.answerNumber} из {props.quizLength}</small>
    </p>
    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
);

ActiveQuiz.propTypes = {
  answerNumber: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  quizLength: PropTypes.number.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  onAnswerClick: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ActiveQuiz;
