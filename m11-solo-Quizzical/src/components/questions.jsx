import React from 'react'
import { shuffle } from '../shuffle.js';

import data from '../triviaData.js'

function Questions(props) {

        const triviaCards = data.map(i => {
            const correctAnswer = {value: i.correct_answer, isSelected: false}
            const incorrectAnswers = i.incorrect_answers.map(item => {return {value: item, isSelected: false}})
            const answers = [correctAnswer, ...incorrectAnswers]
            const shuffledAnswers = shuffle(answers)

            return (
                <div className="trivia-cards">
                    <h2 key={i.question}>{i.question}</h2>
                    <div className="answers">
                        {shuffledAnswers.map(answer => {
                            return <input value={answer.value} className="btn-answer" />
                        })}
                    </div>
                    <p></p>
                </div> 
            )
        })             

    return (
        <div className={`questions ${props.startGame ? 'flex' : 'none'}`}>
            {triviaCards}
            <button className="btn-check">Check answers</button>
        </div>
    )
}

export default Questions