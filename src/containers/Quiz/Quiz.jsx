import React from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

export default class Quiz extends React.PureComponent {

    state = {
        activeQuestion: 0,
        quiz: [
            {
                rightAnswerId: 2,
                question: 'Какого цвета небо?',
                id: 1,
                answers: [
                    {text: 'Черный', id: 1},
                    {text: 'Синий', id: 2},
                    {text: 'Красный', id: 3},
                    {text: 'Зеленый', id: 4},
                ]
            },
            {
                rightAnswerId: 3,
                question: 'В каком году основали Санкт-Петербург?',
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1705', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4},
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log("Answer is: ", answerId)
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }


    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Заполни все ответы</h1>
                    <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}/>
                </div>
            </div>
        )
    }
}